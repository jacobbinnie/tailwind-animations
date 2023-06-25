import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import firebaseApp from "../firebase/config";

export const isUserPremium = async () => {
  const db = getFirestore();
  const auth = getAuth(firebaseApp);

  if (auth.currentUser) {
    const userDocRef = doc(collection(db, "users"), auth.currentUser.uid);

    try {
      // Get the user document
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        // User document exists
        const userDocData = userDocSnapshot.data();
        console.log("User Data:", userDocData);

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
  }
};
