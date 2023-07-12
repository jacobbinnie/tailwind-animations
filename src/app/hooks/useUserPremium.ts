import { useState, useEffect } from "react";
import { isUserPremium } from "../firebase/isUserPremium";

export const useUserPremium = (userId: string | undefined) => {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fetchingData, setFetchingData] = useState(false); // New state variable

  useEffect(() => {
    const fetchUserPremium = async () => {
      // Simulating an asynchronous API call

      try {
        if (userId) {
          setFetchingData(true); // Set fetchingData to true before fetching data
          const premium = await isUserPremium(userId); // Replace with your actual function call
          setIsPremium(premium);
          setLoading(false);
        } else {
          setIsPremium(false);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user premium status:", error);
      } finally {
        setFetchingData(false); // Set fetchingData to false after data is fetched
      }
    };

    fetchUserPremium();
  }, [userId]);

  return { isPremium, loading, fetchingData }; // Include fetchingData in the return value
};
