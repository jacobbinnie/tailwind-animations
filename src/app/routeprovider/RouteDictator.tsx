"use client";
import Navbar from "../components/Navbar";
import { useAuth } from "../authprovider";
import { useUserPremium } from "../hooks/useUserPremium";
import { useRoute } from ".";
import Auth from "../pages/auth";
import Dashboard from "../pages/dashboard";
import { useEffect } from "react";

interface RouteDictatorProps {}

export function RouteDictator({}: RouteDictatorProps) {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.navigator !== "undefined" &&
      typeof navigator !== "undefined" &&
      navigator.userAgent
    ) {
      const disableDevtool = require("disable-devtool");
      disableDevtool();
    }
  }, []);

  const { page } = useRoute();
  const { auth } = useAuth();
  const { isPremium, loading, fetchingData } = useUserPremium(auth.user?.uid);

  let componentToRender;

  switch (page) {
    case 0:
      componentToRender = <Auth isPremium={isPremium} tab="signin" />;
      break;

    case 1:
      componentToRender = <Auth isPremium={isPremium} tab="signup" />;
      break;

    default:
      componentToRender = <Dashboard isPremium={isPremium} loading={loading} />;
      break;
  }

  if (auth.loading || fetchingData) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen w-full flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-700 via-indigo-950 to-black">
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
