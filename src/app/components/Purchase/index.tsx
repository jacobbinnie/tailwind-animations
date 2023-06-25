import { createCheckoutSession } from "@/app/stripe/stripeConfig";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface PurchaseProps {}

function Purchase({}: PurchaseProps) {
  const [loading, setLoading] = useState(false);

  const initiateCheckout = () => {
    setLoading(true);
    createCheckoutSession();
  };

  return (
    <div className="flex bg-transparent min-h-screen w-full fixed top-0 left-0 z-20 px-5">
      <div className="m-auto w-full max-w-lg">
        <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 py-10 text-gray-700">
          <div className="w-full pt-1">
            <div className="animate-rainbow-river text-white overflow-hidden rounded-full w-20 h-20 -mt-20 mx-auto shadow-lg flex justify-center items-center">
              <i className="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div className="my-10">
            <h1 className="text-center font-bold text-2xl uppercase">
              US$49.00
            </h1>
            <p className="text-sm text-center">One time payment</p>
            <p className="text-sm text-center px-10 mt-5">
              <span className="font-bold">Lifetime access</span> to Tailwind
              Animations. Includes 50+ hand-crafted animations, with more coming
              soon. Will receieve all future updates at no extra cost.
            </p>
          </div>

          <div>
            <button
              onClick={() => initiateCheckout()}
              disabled={loading}
              className="block w-full transition-all disabled:opacity-50 bg-black hover:animate-rainbow-river text-white rounded-lg px-3 py-3 font-semibold"
            >
              <i className="mdi mdi-lock-outline mr-1"></i>{" "}
              {loading ? "Loading..." : "Get Access"}
            </button>
            <div className="flex justify-center items-center h-10 gap-1">
              <LockClosedIcon width={10} />
              <p className="text-sm text-center">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
