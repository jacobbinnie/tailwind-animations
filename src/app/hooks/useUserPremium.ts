import { useState, useEffect } from "react";
import { isUserPremium } from "../firebase/isUserPremium";

export const useUserPremium = (userId: string | undefined) => {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPremium = async () => {
      // Simulating an asynchronous API call

      try {
        if (userId) {
          const premium = await isUserPremium(userId); // Replace with your actual function call
          setIsPremium(premium);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user premium status:", error);
      }
    };

    fetchUserPremium();
  }, [userId]);

  return { isPremium, loading };
};
