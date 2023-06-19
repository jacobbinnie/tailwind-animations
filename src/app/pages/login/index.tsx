import Navbar from "@/app/components/Navbar";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const [view, setView] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState<string>("");

  function isEmail(): boolean {
    // Regular expression pattern for validating email addresses
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }

  function handleSendMagicLink() {
    alert("Magic link sent!");
  }

  return (
    <>
      <div className="flex h-screen flex-col items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        <Navbar />
        <div className="w-full h-full max-w-lg flex flex-col justify-center px-5">
          <span className="inline-flex items-center">
            <span className="px-6 py-2 text-base font-bold text-white uppercase rounded-lg bg-white/10">
              Tailwind Animations
            </span>
          </span>
          <p className="mt-8 text-5xl font-extrabold tracking-tight text-white">
            {view === "signin" ? "Sign in" : "Sign up"}
          </p>
          <p className="max-w-xl mt-4 text-lg lg:text-xl text-slate-200">
            {view === "signin"
              ? "Enter your email and we'll send you a magic link"
              : "Welcome to Tailwind Animations - a beautiful library of tailwind animations for your app"}
          </p>

          <div className="flex flex-col justify-center gap-3 mt-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMagicLink();
              }}
              className="w-full  border-2 border-white/30 lg:mx-auto p-1.5 rounded-2xl"
            >
              <div className="w-full flex flex-col lg:items-center p-2 gap-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                  autoComplete="email"
                  className="block w-full p-3 font-semibold text-lg text-white bg-transparent border border-transparent appearance-none focus:border-slate-500 rounded-xl focus:outline-none focus:ring-slate-500 placeholder:text-slate-400rounded-xl"
                  placeholder="Enter your email..."
                  required={true}
                  type="email"
                />

                <button
                  disabled={!isEmail()}
                  className="relative inline-flex items-center justify-center h-14 p-4 w-full py-4 overflow-hidden font-medium text-white transition duration-300 ease-out animate-rainbow-river rounded-xl shadow-md group"
                >
                  <span
                    className={clsx(
                      isEmail() && "mr-0 translate-x-0 animate-green-swoosh",
                      "absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full mr-2 ease"
                    )}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span
                    className={clsx(
                      isEmail() && "translate-x-full",
                      "absolute flex items-center justify-center text-lg w-full h-full text-white transition-all duration-300 transform ease"
                    )}
                  >
                    {view === "signin" ? "Send magic link" : "Sign up"}
                  </span>
                </button>
              </div>
            </form>
            <div className="mt-1 w-full flex">
              <p className="text-sm font-semibold">
                {view === "signin"
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <span
                  onClick={() =>
                    setView(view === "signup" ? "signin" : "signup")
                  }
                  className="font-black cursor-pointer text-blue-700"
                >
                  {view === "signin" ? " Sign up" : " Sign in"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
