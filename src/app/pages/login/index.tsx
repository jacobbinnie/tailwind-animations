import {
  ArrowLongRightIcon,
  BellIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useState } from "react";
interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isEmail = () => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmitEmail = () => {
    if (isEmail()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <section className="flex w-full items-center justify-center h-full md:h-screen space animate-background-gradient">
        <section>
          <div className="relative items-center w-full px-5 py-12 pt-24 mx-auto lg:px-32 max-w-7xl md:px-12">
            <div className="mx-auto text-center">
              <div>
                <p className="text-3xl font-semibold tracking-tight text-white clash md:text-7xl">
                  Beautiful AI app designs
                  <span className="md:block">
                    {" "}
                    for your app in{" "}
                    <span className="font-extrabold animate-pulse">
                      minutes
                    </span>
                  </span>
                </p>
                <p className="mt-6 text-xl tracking-tight text-white/70">
                  No design experience necessary
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center max-w-sm gap-3 mx-auto">
              <>
                <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row w-full">
                  <form className="w-full bg-white/20 p-1.5 rounded-2xl">
                    <div className="w-full md:flex md:items-center">
                      <div className="w-full">
                        <input
                          aria-label="Enter your email..."
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full p-3 text-gray-200 bg-transparent border border-transparent appearance-none rounded-xl focus:border-slate-500 focus:outline-none focus:ring-slate-500 placeholder:text-slate-300 sm:text-sm"
                          placeholder="Enter your email..."
                          type="email"
                        />
                      </div>
                      <button
                        className={clsx(
                          "transition-all",
                          isEmail()
                            ? "w-full md:w-auto 0 active:bg-transparent active:text-white/80 before:transition-colors transition-all"
                            : "animate-gradient-xy w-full md:w-auto 0 active:bg-transparent active:text-white/80 before:transition-colors transition-all",
                          "animate-gradient-green flex-none font-medium hover:bg-indigo-900 hover:text-white inline-flex justify-center lg:ml-4 outline-2 outline-offset-2 px-6 py-2.5 relative rounded-xl text-primary-dark"
                        )}
                        type="button"
                        onClick={() => handleSubmitEmail()}
                      >
                        <div className="flex justify-center items-center gap-2 transition-all">
                          {isEmail()
                            ? "Looks good! Notify me"
                            : "Join the waitlist"}
                          <BellIcon width={16} />
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mt-3">
                  <p className="text-white text-center text-sm">
                    Get notifed on launch. We won&apos;t sell your data (ever).
                  </p>
                </div>
              </>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Login;
