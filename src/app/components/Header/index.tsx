import { ArrowDownIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  setShowPurchase: Dispatch<SetStateAction<boolean>>;
  isPremium: boolean;
  loading: boolean;
}

function Header({ setShowPurchase, isPremium, loading }: HeaderProps) {
  return (
    <div className="flex justify-center pb-10 items-center bg-gradient-to-r from-indigo-300 to-purple-400">
      <section className="flex flex-col w-full justify-center h-full">
        <div className="relative items-center w-full mt-10 px-5 py-12 pt-24 mx-auto lg:px-32 max-w-7xl md:px-12">
          <div className="mx-auto text-center">
            <div>
              <p className="text-4xl font-semibold tracking-tight text-white clash sm:text-5xl md:text-7xl">
                Beautiful tailwind animations
                <span className="md:block">
                  {" "}
                  for your app in{" "}
                  <span className="font-extrabold animate-pulse">seconds</span>
                </span>
              </p>
              <p className="mt-6 text-xl tracking-tight text-white/70">
                Simply copy and paste into your project
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <div
              onClick={() => setShowPurchase(true)}
              className={clsx(
                isPremium ? "cursor-default" : "cursor-pointer",
                "w-full items-center max-w-sm mb-5 bg-white/20 p-1.5 rounded-2xl flex flex-col justify-center gap-3 mt-10"
              )}
            >
              <div className="w-full gap-2 p-1 flex items-center">
                <a className="relative inline-flex items-center justify-center h-14 p-4 w-full py-4 overflow-hidden font-medium text-white transition duration-300 ease-out animate-rainbow-river rounded-xl shadow-md group">
                  <span
                    className={clsx(
                      isPremium
                        ? "cursor-default"
                        : "-translate-x-full group-hover:cursor-pointer group-hover:mr-0 mr-2 md:group-hover:translate-x-0",
                      "absolute flex items-center justify-center w-full h-full text-white duration-300 animate-green-swoosh ease"
                    )}
                  />
                  <span
                    className={clsx(
                      !isPremium &&
                        "group-hover:cursor-pointer md:group-hover:translate-x-0",
                      "absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full animate-green-swoosh ease"
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
                      !isPremium && "md:group-hover:translate-x-full",
                      "absolute flex items-center justify-center text-lg w-full h-full text-white transition-all duration-300 transform ease"
                    )}
                  >
                    {isPremium ? (
                      <div className="w-full flex justify-center items-center gap-2">
                        <p>You have lifetime access</p>
                        <CheckBadgeIcon width={20} />
                      </div>
                    ) : (
                      "$29 Lifetime Access"
                    )}
                  </span>
                </a>
              </div>
            </div>

            {!isPremium && !loading && (
              <>
                <div className="mt-16 flex text-white/70 flex-col justify-center items-center gap-3 w-full max-w-lg">
                  <p className="text-lg">See how it works</p>
                  <ArrowDownIcon width={20} />
                </div>

                <div className="relative items-center w-full py-12 pb-12 mx-auto mt-2 max-w-7xl z-10">
                  <video
                    className="relative object-cover w-full rounded-lg overflow-hidden shadow-2xl lg:rounded-2xl z-20"
                    controls={true}
                    muted={false}
                    poster="https://firebasestorage.googleapis.com/v0/b/tailwind-animations/o/1.jpeg?alt=media&token=aadfc96b-e121-4fc6-bd47-c64bf1408607"
                  >
                    <source src="https://firebasestorage.googleapis.com/v0/b/tailwind-animations/o/Untitled(2).mp4?alt=media&token=62e41ade-4b98-42e3-aa3b-3e37f540be04" />
                  </video>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
