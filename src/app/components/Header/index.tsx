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
    <div className="flex justify-center pb-10 items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
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
                      "$37 Lifetime Access"
                    )}
                  </span>
                </a>
              </div>
            </div>

            {!isPremium && !loading && (
              <>
                <div className="w-full text-lg flex justify-center text-white/70">
                  <p>One time payment</p>
                </div>

                <div className="mt-16 flex text-white/70 flex-col justify-center items-center gap-3 w-full max-w-lg">
                  <p className="text-lg">Quick Video Walkthrough</p>
                  <ArrowDownIcon width={20} />
                </div>

                <div className="relative items-center w-full py-12 pb-12 mx-auto mt-2 max-w-7xl z-10">
                  <svg
                    fill="none"
                    viewBox="0 0 400 400"
                    height="100%"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -mt-24 blur-3xl"
                  >
                    <g clipPath="url(#clip0_10_20)">
                      <g filter="url(#filter0_f_10_20)">
                        <path
                          d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z"
                          fill="#ff237d"
                        ></path>
                        <path
                          d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z"
                          fill="#7C87F8"
                        ></path>
                        <path
                          d="M320 400H400V78.75L106.2 134.75L320 400Z"
                          fill="#4C65E4"
                        ></path>
                        <path
                          d="M400 0H128.6L106.2 134.75L400 78.75V0Z"
                          fill="#043AFF"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <filter
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                        height="720.666"
                        id="filter0_f_10_20"
                        width="720.666"
                        x="-160.333"
                        y="-160.333"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        ></feFlood>
                        <feBlend
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          mode="normal"
                          result="shape"
                        ></feBlend>
                        <feGaussianBlur
                          result="effect1_foregroundBlur_10_20"
                          stdDeviation="80.1666"
                        ></feGaussianBlur>
                      </filter>
                    </defs>
                  </svg>
                  <video
                    className="relative object-cover w-full rounded-lg overflow-hidden shadow-2xl lg:rounded-2xl"
                    controls={true}
                    muted={false}
                    poster="https://firebasestorage.googleapis.com/v0/b/tailwind-animations/o/Screenshot%202023-06-18%20at%206.14.58%20PM.png?alt=media&token=2d9165c5-9bde-419c-b98f-b571bf1684a4"
                  >
                    <source src="https://firebasestorage.googleapis.com/v0/b/tailwind-animations/o/tailwindanimationsdemo1.mp4?alt=media&token=fca3be1b-6f69-4ae6-8268-059e425f54e8" />
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
