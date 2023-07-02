import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";

interface SigninSignupProps {
  handleSendMagicLink(): void;
  view: "signin" | "signup";
  setView: Dispatch<SetStateAction<"signin" | "signup">>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  isEmail(): boolean;
  emailSent: boolean;
  handleSetLoading(value: boolean): void;
  loading: boolean;
}

function SigninSignup({
  handleSendMagicLink,
  view,
  setView,
  email,
  setEmail,
  isEmail,
  emailSent,
  handleSetLoading,
  loading,
}: SigninSignupProps) {
  return (
    <div className="relative items-center w-full py-12 pb-12 mx-auto mt-2 max-w-7xl z-0">
      <div className="w-full flex justify-center">
        <div className="w-full relative bg-white h-min max-w-xl px-5 sm:p-10 py-12 flex flex-col rounded-xl gap-4 overflow-hidden bg-transparent shadow-lg">
          <p className="text-4xl font-extrabold tracking-tight text-black">
            {view === "signin" ? "Sign in" : "Sign up"}
          </p>
          <p className="max-w-xl mt-4 font-medium text-sm sm:text-lg text-black">
            {emailSent
              ? `An email has been sent to ${email}. Click the link in the email to sign in.`
              : view === "signin"
              ? "Enter your email and we'll send you a sign in link"
              : "Get started by entering your email address"}
          </p>

          {!emailSent && (
            <>
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
                    className="block w-full p-4 font-semibold text-sm sm:text-lg text-black bg-transparent border border-black appearance-none rounded-xl focus:outline-none focus:ring-transparent placeholder:text-gray-800"
                    placeholder="me@email.com"
                    required={true}
                    type="email"
                  />

                  <button
                    disabled={loading || !isEmail()}
                    className="relative inline-flex items-center justify-center h-14 p-4 w-full py-4 overflow-hidden font-semibold text-black transition duration-300 ease-out bg-black animate-rainbow-river rounded-xl shadow-md group"
                  >
                    <span
                      className={clsx(
                        isEmail()
                          ? "mr-0 translate-x-0 animate-green-swoosh"
                          : "mr-2",
                        "absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full ease"
                      )}
                    >
                      {" "}
                      {loading ? (
                        "Loading..."
                      ) : (
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
                      )}
                    </span>
                    <span
                      className={clsx(
                        isEmail() && "translate-x-full",
                        "absolute flex items-center justify-center text-sm sm:text-lg w-full h-full text-white transition-all duration-300 transform ease"
                      )}
                    >
                      {view === "signin" ? "Sign in" : "Sign up"}
                    </span>
                  </button>
                </div>
              </form>
              <div className="w-full flex">
                <p className="text-sm font-medium text-gray-800">
                  {view === "signin"
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <span
                    onClick={() =>
                      setView(view === "signup" ? "signin" : "signup")
                    }
                    className="font-black cursor-pointer text-indigo-700"
                  >
                    {view === "signin" ? " Sign up" : " Sign in"}
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SigninSignup;
