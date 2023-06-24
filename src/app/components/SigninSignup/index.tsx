import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";

interface SigninSignupProps {
  handleSendMagicLink(): void;
  view: "signin" | "signup";
  setView: Dispatch<SetStateAction<"signin" | "signup">>;
  setEmail: Dispatch<SetStateAction<string>>;
  isEmail(): boolean;
}

function SigninSignup({
  handleSendMagicLink,
  view,
  setView,
  setEmail,
  isEmail,
}: SigninSignupProps) {
  return (
    <div className="w-full border-2 h-min max-w-xl px-5 sm:p-10 py-10 flex flex-col rounded-xl gap-4 overflow-hidden bg-transparent shadow-lg">
      <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
        {view === "signin" ? "Sign in" : "Lifetime access for only $49"}
      </p>
      <p className="max-w-xl mt-4 font-medium text-sm sm:text-lg text-gray-300">
        {view === "signin"
          ? "Enter your email and we'll send you a sign in link"
          : "A gorgeous library of tailwind animations for your next project. Includes 50+ hand-crafted animations, with more coming soon."}
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMagicLink();
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
                isEmail() ? "mr-0 translate-x-0 animate-green-swoosh" : "mr-2",
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
              {view === "signin" ? "Send sign in link" : "Get started"}
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
            onClick={() => setView(view === "signup" ? "signin" : "signup")}
            className="font-black cursor-pointer text-blue-700"
          >
            {view === "signin" ? " Sign up" : " Sign in"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default SigninSignup;
