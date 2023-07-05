import firebaseApp from "@/app/firebase/config";
import { User } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

interface ManageAccessButtonProps {
  user: User;
}

function ManageAccessButton({ user }: ManageAccessButtonProps) {
  const handleCustomerPortal = async () => {
    // logic here
  };

  return (
    <div onClick={() => handleCustomerPortal()} className="flex">
      <p className="text-sm hidden sm:block text-gray-300 cursor-pointer">
        Manage access
      </p>
    </div>
  );
}

export default ManageAccessButton;
