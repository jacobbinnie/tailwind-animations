"use client";
import { useRoute } from "./index";
import Dashboard from "../pages/dashboard";
import Auth from "../pages/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import firebaseApp from "../firebase/config";
import Navbar from "../components/Navbar";
import { useAuth } from "../authprovider";

interface RouteDictatorProps {}

export function RouteDictator({}: RouteDictatorProps) {
  const { page } = useRoute();

  const { auth } = useAuth();

  let componentToRender;

  switch (page) {
    case 0:
      componentToRender = <Auth tab="signin" />;
      break;

    case 1:
      componentToRender = <Auth tab="signup" />;
      break;

    default:
      componentToRender = <Dashboard />;
      break;
  }

  if (auth.loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
          <div className="w-20 animate-spin">
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
        </div>
      </>
    );
  }

  return <>{componentToRender}</>;
}
