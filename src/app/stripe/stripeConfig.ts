import { getAuth } from "firebase/auth";
import firebaseApp, { db } from "../firebase/config";
import { collection, doc, addDoc, onSnapshot } from "firebase/firestore";

const auth = getAuth(firebaseApp);

export const createCheckoutSession = async () => {
  if (auth.currentUser) {
    addDoc(collection(db, "users", auth.currentUser.uid, "checkout_sessions"), {
      mode: "payment",
      price: "price_1NStGtCllZndS8ko0s9MARpq", // Production
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    })
      .then((checkoutSessionRef) => {
        if (auth.currentUser) {
          // Listen for changes to the checkout session document
          const unsubscribe = onSnapshot(
            doc(
              db,
              "users",
              auth.currentUser.uid,
              "checkout_sessions",
              checkoutSessionRef.id
            ),
            (snapshot) => {
              console.log(snapshot.data());
              if (snapshot.exists()) {
                const checkoutSessionData = snapshot.data();
                // Redirect the user to the checkout URL
                if (checkoutSessionData.sessionId) {
                  window.location.assign(checkoutSessionData.url);
                }
              }
            }
          );

          // Clean up the listener when necessary
          // For example, if the user cancels or closes the page before the checkout session is created
          // you can call unsubscribe() to stop listening for changes

          // To unsubscribe after a certain amount of time (e.g., 10 seconds), you can use setTimeout:
          setTimeout(() => {
            unsubscribe();
          }, 10000);
        }
      })
      .catch((error) => {
        throw new Error(`Error creating checkout session: ${error}`);
      });
  }
};
