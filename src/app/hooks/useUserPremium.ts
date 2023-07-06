import { useState, useEffect, use } from "react";
import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useUserPremium = (user: User | null | undefined) => {
  const [isSubscribed, setIsSubscribed] = useState<{
    isPremium: boolean;
    isLifetime: boolean;
  }>({ isPremium: false, isLifetime: false });
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
            setIsSubscribed({ isPremium: true, isLifetime: false });
            setLoading(false);
          } else {
            // check user for lifetime access here
            const userRef = doc(db, "users", user.uid);

            getDoc(userRef).then((docSnapshot) => {
              if (docSnapshot.exists() && docSnapshot.data().lifetime) {
                setIsSubscribed({ isPremium: true, isLifetime: true });
                setLoading(false);
              } else {
                setIsSubscribed({ isPremium: false, isLifetime: false });
                setLoading(false);
              }
            });
          }
        } else {
          setIsSubscribed({ isPremium: false, isLifetime: false });
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

  return { isSubscribed, loading, fetchingData };
};
