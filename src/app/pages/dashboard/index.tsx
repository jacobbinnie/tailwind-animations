"use client";
import GridSection from "@/app/components/GridSection";
import SortTabs from "@/app/components/SortTabs";
import { useState } from "react";
import designs from "./../../util/designs.json";
import CodeReveal from "@/app/components/CodeReveal";
import clsx from "clsx";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useAuth } from "@/app/authprovider";
import Purchase from "@/app/components/Purchase";
import { useUserPremium } from "@/app/hooks/useUserPremium";

interface DashboardProps {}

function Dashboard({}: DashboardProps) {
  const [tab, setTab] = useState(0);
  const [revealingCode, setRevealingCode] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");
  const [showPurchase, setShowPurchase] = useState(false);

  const { user } = useAuth();

  const { isPremium, loading } = useUserPremium(user?.uid);

  const handleSetTab = (tab: number) => {
    setTab(tab);
  };

  const handleCloseCodeReveal = () => {
    setRevealingCode(false);
    setSelectedKey("");
  };

  const handleSetSelectedKey = (key: string) => {
    setSelectedKey(key);
    setRevealingCode(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
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
              fill="#fff"
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
    );
  }

  return (
    <>
      <Navbar />
      {showPurchase && (
        <>
          <div className="min-h-screen fixed top-0 left-0 bg-black z-20 w-full opacity-70" />
          <Purchase />
        </>
      )}
      <div
        onClick={() => handleCloseCodeReveal()}
        className={clsx(
          revealingCode ? "opacity-100" : "hidden",
          "bg-black fixed bottom-10 hover:opacity-50 transition-all right-10 rounded animate-black-swoosh px-8 py-4 z-20 cursor-pointer"
        )}
      >
        Close
      </div>
      <div className="w-full min-w-screen h-full min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-white to-white">
        <CodeReveal
          revealingCode={revealingCode}
          animationKey={selectedKey.toLowerCase()}
          handleCloseCodeReveal={handleCloseCodeReveal}
        />

        {/* Header */}

        {!isPremium && <Header />}

        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
          {/* Filter Bar */}

          <div className="flex gap-4 mb-12 flex-col">
            <SortTabs tab={tab} handleSetTab={handleSetTab} />
          </div>

          <div className="flex flex-col w-full gap-20">
            {/* Buttons Layout */}
            {tab === 0 && (
              <GridSection
                displays={designs.animations.buttons}
                type={"button"}
                handleSetSelectedKey={handleSetSelectedKey}
              />
            )}

            {/* Gradients Layout */}
            {tab === 0 && (
              <GridSection
                displays={designs.animations.gradients}
                type={"gradient"}
                handleSetSelectedKey={handleSetSelectedKey}
              />
            )}

            {/* Spaces Layout */}
            {tab === 0 && (
              <GridSection
                displays={designs.animations.backdropSpaces}
                type={"space"}
                handleSetSelectedKey={handleSetSelectedKey}
              />
            )}

            {/* Classics Layout */}
            {tab === 0 && (
              <GridSection
                displays={designs.animations.classics}
                type={"classic"}
                handleSetSelectedKey={handleSetSelectedKey}
              />
            )}

            {/* Show only if the number isn't 0 */}
            {tab !== 0 && (
              <>
                {/* Individual section 1 */}
                {tab === 1 && (
                  <GridSection
                    displays={designs.animations.buttons}
                    type={"button"}
                    handleSetSelectedKey={handleSetSelectedKey}
                  />
                )}

                {/* Individual section 2 */}
                {tab === 2 && (
                  <GridSection
                    displays={designs.animations.gradients}
                    type={"gradient"}
                    handleSetSelectedKey={handleSetSelectedKey}
                  />
                )}

                {/* Individual section 3 */}
                {tab === 3 && (
                  <GridSection
                    displays={designs.animations.backdropSpaces}
                    type={"space"}
                    handleSetSelectedKey={handleSetSelectedKey}
                  />
                )}

                {/* Individual section 4 */}
                {tab === 4 && (
                  <GridSection
                    displays={designs.animations.classics}
                    type={"classic"}
                    handleSetSelectedKey={handleSetSelectedKey}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
