import { useAuth } from "@/app/authprovider";
import { useRoute } from "@/app/routeprovider";
import { createCheckoutSession } from "@/app/stripe/stripeConfig";
import {
  CreditCardIcon,
  LockClosedIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction, useState } from "react";

interface PurchaseProps {
  setShowPurchase: Dispatch<SetStateAction<boolean>>;
}

function Purchase({ setShowPurchase }: PurchaseProps) {
  const [loading, setLoading] = useState(false);

  const { auth } = useAuth();
  const { handleSetPage } = useRoute();

  const initiateCheckout = () => {
    setLoading(true);
    createCheckoutSession();
  };

  const handleAction = () => {
    if (auth.user) {
      initiateCheckout();
    } else {
      handleSetPage(1);
    }
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
              $19 USD / year
            </h1>

            <p className="text-sm text-center px-10 mt-5">
              <span className="font-bold">Instant access</span> to Tailwind
              Animations. Includes 50+ hand-crafted animations, with more coming
              soon. Will receieve all future updates automatically.
            </p>
          </div>

          <div>
            <button
              onClick={() => handleAction()}
              disabled={loading}
              className="flex w-full justify-center items-center transition-all disabled:opacity-50 h-16 bg-black hover:animate-rainbow-river text-white rounded-lg px-3 py-3 font-semibold"
            >
              <i className="mdi mdi-lock-outline mr-1"></i>{" "}
              <div className="w-full max-h-16 items-center flex justify-center">
                {!auth.user ? (
                  "Get Started"
                ) : loading ? (
                  <div className="w-10 h-10">
                    <svg
                      version="1.1"
                      id="L9"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 100 100"
                      enableBackground="new 0 0 0 0"
                    >
                      <path
                        className="fill-current text-gray-300"
                        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                      >
                        <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          dur="1s"
                          from="0 50 50"
                          to="360 50 50"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                  </div>
                ) : (
                  <p className="flex gap-2 w-full h-full justify-center items-center">
                    Pay Now <LockClosedIcon width={16} />
                  </p>
                )}
              </div>
            </button>
            <div className="flex justify-center items-center h-10 gap-1">
              <LockClosedIcon width={10} />
              <p className="text-sm text-center">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setShowPurchase(false)}
          className="w-full flex justify-center items-center mt-5 hover:opacity-80 transition-all cursor-pointer"
        >
          <XCircleIcon width={40} />
        </div>
      </div>
    </div>
  );
}

export default Purchase;
