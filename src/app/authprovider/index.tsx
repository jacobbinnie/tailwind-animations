"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  User,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  signOut,
  Auth,
  browserLocalPersistence,
} from "firebase/auth";
import firebaseApp from "../firebase/config";
import { useRoute } from "../routeprovider";
import { db } from "../firebase/config";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

interface AuthContextValues {
  auth: {
    user: User | null | undefined;
    loading: boolean;
    error: Error | undefined;
  };
  sendMagicLink: (email: string) => Promise<void | null>;
  signInVerify: () => Promise<void | null>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValues>({
  auth: { user: null, loading: false, error: undefined },
  sendMagicLink: async (email: string) => null,
  signInVerify: async () => null,
  signOut: async () => {},
});

interface AuthProviderOptions {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderOptions) => {
  const { handleSetPage } = useRoute();

  const auth = getAuth(firebaseApp);

  const [user, loading, error] = useAuthState(auth);

  const sendMagicLink = async (email: string) => {
    const redirectUrl = `${
      process.env.NEXT_PUBLIC_REDIRECT_URL
    }?email=${encodeURIComponent(email)}`;

    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: redirectUrl,
      handleCodeInApp: true,
    };

    try {
      // Send the magic link to the provided email
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);

      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email);

      // Inform the user that the link was successfully sent (optional)
    } catch (error) {
      // Handle error
    }
  };

  const signInVerify = useCallback(async () => {
    const auth = getAuth(firebaseApp);
    const url = window.location.href;

    if (isSignInWithEmailLink(auth, url)) {
      let email = window.localStorage.getItem("emailForSignIn");

      if (!email) {
        // Extract the email from the URL
        const searchParams = new URLSearchParams(window.location.search);
        email = searchParams.get("email");

        if (!email) {
          alert("Email is required for sign in");
          return;
        }
      }

      signInWithEmailLink(auth, email, url)
        .then((result) => {
          // Clear email from storage.
          window.localStorage.removeItem("emailForSignIn");

          // Add user to Firestore Users
          const userRef = doc(db, "users", result.user.uid);

          setDoc(userRef, { uid: result.user.uid, email: result.user.email })
            .then(() => handleSetPage(2))
            .catch((error) => {
              throw new Error(error);
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }, [handleSetPage]);

  const signOutUser = async () => {
    const auth = getAuth(firebaseApp);

    try {
      await signOut(auth);
    } catch (error) {
      // Handle sign out error
    }
  };

  useEffect(() => {
    const auth = getAuth(firebaseApp);

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current session.
        if (isSignInWithEmailLink(auth, window.location.href)) {
          signInVerify();
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }, [signInVerify]);

  const value = {
    auth: {
      user,
      loading,
      error,
    },
    sendMagicLink,
    signInVerify,
    signOut: signOutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
