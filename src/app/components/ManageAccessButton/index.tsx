import firebaseApp from "@/app/firebase/config";
import { User } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

interface ManageAccessButtonProps {
  user: User;
}

function ManageAccessButton({ user }: ManageAccessButtonProps) {
  const handleCustomerPortal = async () => {
    window.location.href = `https://billing.stripe.com/p/login/dR6cNUdci95c2fm000?prefilled_email=${user.email}`;
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
