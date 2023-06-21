"use client";
import { useAuth } from "@/app/authprovider";
import Navbar from "@/app/components/Navbar";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface AuthProps {
  tab: "signin" | "signup";
}

export const Auth: React.FC<AuthProps> = ({ tab }) => {
  const [view, setView] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState<string>("");

  const { sendMagicLink } = useAuth();

  function isEmail(): boolean {
    // Regular expression pattern for validating email addresses
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  useEffect(() => {
    if (tab === "signin") {
      setView("signin");
    } else {
      setView("signup");
    }
  }, [tab]);

  return (
    <>
      <div className="flex h-screen flex-col items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        <Navbar />
        <div className="flex h-full w-full items-center justify-center p-5">
          <div className="w-full border-2 h-min max-w-xl px-5 sm:p-10 py-10 flex flex-col rounded-xl gap-4 overflow-hidden bg-transparent shadow-lg">
            <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              {view === "signin" ? "Sign in" : "Sign up"}
            </p>
            <p className="max-w-xl mt-4 font-medium text-sm sm:text-lg text-gray-300">
              {view === "signin"
                ? "Enter your email and we'll send you a magic sign in link"
                : "Unlock a beautiful library of tailwind animations for your next project. Enter your email to get started"}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMagicLink(email);
              }}
              className="w-full rounded-2xl"
            >
              <div className="w-full flex flex-col mt-5 gap-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                  autoComplete="email"
                  className="block w-full p-4 font-semibold text-sm sm:text-lg text-gray-300 bg-transparent border border-gray-300 appearance-none focus:border-gray-300 rounded-xl focus:outline-none focus:ring-transparent placeholder:text-slate-400rounded-xl"
                  placeholder="Enter your email..."
                  required={true}
                  type="email"
                />

                <button
                  disabled={!isEmail()}
                  className="relative inline-flex items-center justify-center h-14 p-4 w-full py-4 overflow-hidden font-semibold text-white transition duration-300 ease-out animate-rainbow-river rounded-xl shadow-md group"
                >
                  <span
                    className={clsx(
                      isEmail()
                        ? "mr-0 translate-x-0 animate-green-swoosh"
                        : "mr-2",
                      "absolute flex items-center justify-center w-full h-full text-gray-300 duration-300 -translate-x-full ease"
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span
                    className={clsx(
                      isEmail() && "translate-x-full",
                      "absolute flex items-center justify-center text-sm sm:text-lg w-full h-full text-white transition-all duration-300 transform ease"
                    )}
                  >
                    {view === "signin" ? "Send magic link" : "Sign up"}
                  </span>
                </button>
              </div>
            </form>
            <div className="w-full flex">
              <p className="text-sm font-medium text-gray-300">
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

export default Auth;
