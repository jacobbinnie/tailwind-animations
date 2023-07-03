import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuth } from "../authprovider";
import { User } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useUserPremium = (user: User | null | undefined) => {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fetchingData, setFetchingData] = useState(false);

  useEffect(() => {
    const fetchUserPremium = async () => {
      try {
        if (user) {
          setFetchingData(true);
          await user.getIdToken(true);
          const decodedToken = await user.getIdTokenResult();

          const stripeRole = decodedToken.claims.stripeRole;
          const isPremiumUser = stripeRole === "premium";

          if (isPremiumUser) {
            setIsPremium(isPremiumUser);
            setLoading(false);
          } else {
            // check user for lifetime access here
            const userRef = doc(db, "users", user.uid);

            getDoc(userRef).then((docSnapshot) => {
              if (docSnapshot.exists() && docSnapshot.data().lifetime) {
                setIsPremium(true);
                setLoading(false);
              } else {
                setIsPremium(false);
                setLoading(false);
              }
            });
          }
        } else {
          setIsPremium(false);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user premium status:", error);
      } finally {
        setFetchingData(false);
      }
    };

    fetchUserPremium();
  }, [user]);

  return { isPremium, loading, fetchingData };
};
