import { useAuth } from "@/app/authprovider";
import { useRoute } from "@/app/routeprovider";
import Image from "next/image";
import logo from "../../../../public/logoPng.png";

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  const { handleSetPage } = useRoute();
  const { auth, signOut } = useAuth();

  return (
    <div className="w-full mx-auto bg-white border-b sticky top-0 z-30">
      <div className="relative flex w-full p-5 mx-auto bg-white items-center justify-between flex-row px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a
            className="text-lg flex gap-2 justify-center items-center tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl"
            href="/"
          >
            <Image src={logo} alt="logo" width={30} height={30} />
            <span className="lg:text-lg uppercase font-semibold focus:ring-0">
              Tailwind Animations
            </span>
          </a>
        </div>
        {auth.user ? (
          <nav className="items-center flex-grow pb-0 flex justify-end flex-row">
            <div className="inline-flex items-center gap-4 list-none lg:ml-auto">
              <p className="text-sm hidden sm:block text-gray-300">
                {auth.user.email}
              </p>

              <a
                onClick={() => signOut()}
                className="relative cursor-pointer inline-flex items-center justify-center p-4 px-2 py-1 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-b-4 border-black rounded shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease">
                  <svg
                    className="w-4 h-4"
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
                <span className="absolute flex items-center justify-center text-sm w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                  Sign out
                </span>
                <span className="relative invisible">Button Text</span>
              </a>
            </div>
          </nav>
        ) : (
          <nav className="items-center flex-grow pb-0 flex justify-end flex-row">
            <div className="inline-flex items-center gap-4 list-none lg:ml-auto">
              <button
                onClick={() => handleSetPage(0)}
                className="block px-4 py-2 sm:mt-2 text-sm text-gray-500 md:mt-0 focus:outline-none focus:shadow-outline"
              >
                Sign in
              </button>
              <button
                onClick={() => handleSetPage(1)}
                className="iitems-center hidden sm:inline-flex justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black"
              >
                $29 Lifetime Access
              </button>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Navbar;
