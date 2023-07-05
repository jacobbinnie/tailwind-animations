import firebaseApp from "@/app/firebase/config";
import { User } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

interface ManageAccessButtonProps {
  user: User;
}

function ManageAccessButton({ user }: ManageAccessButtonProps) {
  const userStripeId = ""; // TODO: Get user stripe id

  const createPortalLink = async () => {
    const functions = getFunctions(firebaseApp);
    const functionRef = httpsCallable(
      functions,
      "ext-firestore-stripe-payments-createPortalLink"
    );

    try {
      const { data } = await functionRef({
        customer: userStripeId,
        returnUrl: window.location.origin,
        locale: "auto", // Optional, defaults to "auto"
        configuration: "bpc_1JSEAKHYgolSBA358VNoc2Hs", // Optional portal configuration ID
      });

      window.location.assign(data.url);
    } catch (error) {
      console.error("Error creating portal link:", error);
    }
  };

  createPortalLink();

  return (
    <div onClick={() => createPortalLink()} className="flex">
      <p className="text-sm hidden sm:block text-gray-300 cursor-pointer">
        Manage access
      </p>
    </div>
  );
}

export default ManageAccessButton;
