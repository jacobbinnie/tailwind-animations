import { User, getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const isUserPremium = async (userId: string) => {
  const db = getFirestore();

  const userDocRef = doc(collection(db, "users"), userId);

  try {
    // Get the user document
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      // Query the "payments" subcollection with a condition for 'payment.status === "succeeded"'
      const paymentsRef = collection(userDocRef, "payments");
      const paymentsQueryRef = query(
        paymentsRef,
        where("status", "==", "succeeded")
      );
      const paymentsQuerySnapshot = await getDocs(paymentsQueryRef);

      if (!paymentsQuerySnapshot.empty) {
        // At least one payment with 'payment.status === "succeeded"' exists
        console.log("User is premium");
        return true;
      } else {
        // No payments with 'payment.status === "succeeded"' found
        console.log("User is not premium");
        return false;
      }
    } else {
      // User document does not exist
      console.log("User not found");
      return false;
    }
  } catch (error) {
    console.log("Error getting user:", error);
    return false;
  }
};
