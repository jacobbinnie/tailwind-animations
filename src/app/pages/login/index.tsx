import { ArrowDownIcon } from "@heroicons/react/24/solid";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  return (
    <div className="flex justify-center items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <section className="flex flex-col w-full justify-center h-full md:animate-blue-galaxy">
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
            <div className="w-full items-center max-w-sm mb-5 bg-white/20 p-1.5 rounded-2xl flex flex-col justify-center gap-3 mt-10">
              <div className="w-full gap-2 p-1 md:flex md:items-center">
                <a
                  href="https://buy.stripe.com/4gw4jo3voewLexG5kl"
                  target="_blank"
                  className="relative inline-flex items-center justify-center h-14 p-4 w-full py-4 overflow-hidden font-medium text-white transition duration-300 ease-out animate-rainbow-river rounded-xl shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full animate-green-swoosh group-hover:cursor-pointer md:group-hover:translate-x-0 ease">
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
                  <span className="absolute flex items-center justify-center text-lg w-full h-full text-white transition-all duration-300 transform md:group-hover:translate-x-full ease">
                    $17 Lifetime Access
                  </span>
                </a>
              </div>
            </div>

            <div className="w-full text-lg flex justify-center text-white/70">
              <p>Pre-release earlybird offer</p>
            </div>

            <div className="mt-16 flex text-white/70 flex-col justify-center items-center gap-3 w-full max-w-lg">
              <p className="text-lg">Quick Video Walkthrough</p>
              <ArrowDownIcon width={20} className="animate-bounce" />
            </div>

            <div className="relative items-center w-full py-12 pb-12 mx-auto mt-2 max-w-7xl z-0">
              <svg
                fill="none"
                viewBox="0 0 400 400"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -mt-24 blur-3xl"
              >
                <g clip-path="url(#clip0_10_20)">
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
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height="720.666"
                    id="filter0_f_10_20"
                    width="720.666"
                    x="-160.333"
                    y="-160.333"
                  >
                    <feFlood
                      flood-opacity="0"
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
                poster="https://firebasestorage.googleapis.com/v0/b/tailwind-animations.appspot.com/o/Screenshot%202023-06-18%20at%203.10.54%20PM.png?alt=media&token=d0f0acc4-71a6-4f2d-a885-7e3c2d198310"
              >
                <source src="https://firebasestorage.googleapis.com/v0/b/tailwind-animations.appspot.com/o/tailwindanimationsdemo1.mp4?alt=media&token=2ef8e596-42ef-415f-b9fc-8cd4dadb0369" />
              </video>
            </div>
          </div>
          <p className="text-white/70 w-full flex justify-center">
            by&nbsp;
            <a
              className="text-[#00acee] font-black"
              href="https://twitter.com/jacobbinnie"
              target="_blank"
            >
              @jacobbinnie
            </a>
          </p>
        </div>
        <div className="w-screen flex justify-center items-center p-10">
          <p className="text-center max-w-lg text-xs text-gray-50 text-opacity-50">
            Disclaimer: Lifetime access valid for the duration of the product
            being available online. All animations are subject to copyright and
            may not be redistributed without the written consent of{" "}
            <a href="https://twitter.com/jacobbinnie" target="_blank">
              @jacobbinnie
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
