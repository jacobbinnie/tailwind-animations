"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  User,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import firebase_app from "../firebase/config";

interface AuthContextValues {
  user: User | null;
  sendMagicLink: (email: string) => Promise<void | null>;
  signInVerify: () => Promise<void | null>;
}

const AuthContext = createContext<AuthContextValues>({
  user: null,
  sendMagicLink: async (email: string) => null,
  signInVerify: async () => null,
});

interface AuthProviderOptions {
  children?: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderOptions) => {
  const [user, setUser] = useState<User | null>(null);

  const sendMagicLink = async (email: string) => {
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be in the authorized domains list in the Firebase Console.
      url: "http://localhost:3000",
      handleCodeInApp: true,
    };

    const auth = getAuth(firebase_app);

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  const signInVerify = async () => {
    const auth = getAuth(firebase_app);
    const email = window.localStorage.getItem("emailForSignIn");

    if (email) {
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          // Clear email from storage.
          window.localStorage.removeItem("emailForSignIn");
          // Update the user state with the signed-in user.
          setUser(result.user);
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
        })
        .catch((error) => {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
    }
  };

  useEffect(() => {
    const auth = getAuth(firebase_app);

    setPersistence(auth, browserSessionPersistence)
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

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    sendMagicLink,
    signInVerify,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
