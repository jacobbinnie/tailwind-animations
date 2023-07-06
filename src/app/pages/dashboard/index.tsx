"use client";
import GridSection from "@/app/components/GridSection";
import SortTabs from "@/app/components/SortTabs";
import { useEffect, useState } from "react";
import designs from "./../../util/designs.json";
import CodeReveal from "@/app/components/CodeReveal";
import clsx from "clsx";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useAuth } from "@/app/authprovider";
import Purchase from "@/app/components/Purchase";
import { useUserPremium } from "@/app/hooks/useUserPremium";
import { types } from "@/app/interfaces";
import Feedback from "@/app/components/Feedback";

interface DashboardProps {
  isSubscribed: {
    isPremium: boolean;
    isLifetime: boolean;
  };
  loading: boolean;
}

function Dashboard({ isSubscribed, loading }: DashboardProps) {
  const [tab, setTab] = useState(0);
  const [revealingCode, setRevealingCode] = useState(false);
  const [selectedKey, setSelectedKey] = useState<{
    key: string;
    type: types;
  }>();
  const [showPurchase, setShowPurchase] = useState(false);

  const { auth } = useAuth();

  const { isPremium, isLifetime } = isSubscribed;

  useEffect(() => {
    if (auth.user && !auth.loading && !isPremium && !loading) {
      setShowPurchase(true);
    }
  }, [loading, isPremium, auth.user, auth.loading]);

  const handleSetTab = (tab: number) => {
    setTab(tab);
  };

  const handleCloseCodeReveal = () => {
    setRevealingCode(false);
    setSelectedKey(undefined);
  };

  const handleSetSelectedKey = (key: string, type: types) => {
    setSelectedKey({ key, type });
    setRevealingCode(true);
  };

  const handleAssignAction = (type?: "copy") => {
    if (!auth.user) {
      setShowPurchase(true);
    }

    if (isPremium) {
      return true;
    } else {
      setShowPurchase(true);
      return false;
    }
  };

  const commonProps = {
    handleAssignAction,
    handleSetSelectedKey,
  };

  return (
    <>
      {auth.user && <Feedback />}
      <Navbar isSubscribed={isSubscribed} />
      {showPurchase && !loading && !isPremium && (
        <>
          <div className="min-h-screen fixed top-0 left-0 bg-black z-20 w-full opacity-70" />
          <Purchase setShowPurchase={setShowPurchase} />
        </>
      )}
      <div
        onClick={() => handleCloseCodeReveal()}
        className={clsx(
          revealingCode ? "opacity-100" : "hidden",
          "bg-black fixed bottom-10 hover:opacity-50 transition-all right-10 opacity-50 rounded px-8 py-2 z-30 cursor-pointer"
        )}
      >
        Close
      </div>
      <div className="w-full min-w-screen h-full min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-white to-white">
        {isPremium && selectedKey && (
          <CodeReveal
            revealingCode={revealingCode}
            animationKey={{ ...selectedKey }}
            handleAssignAction={handleAssignAction}
          />
        )}

        <Header
          setShowPurchase={setShowPurchase}
          isPremium={isPremium}
          isLifetime={isLifetime}
          loading={loading}
        />

        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
          {/* Filter Bar */}

          <div className="flex gap-4 mb-12 flex-col">
            <SortTabs tab={tab} handleSetTab={handleSetTab} />
          </div>

          <div className="flex flex-col w-full gap-20">
            {/* Buttons Layout */}
            {tab === 0 && (
              <GridSection
                displays={designs.animations.button}
                type={"button"}
                commonProps={commonProps}
              />
            )}

            {/* Gradients Layout */}
            {tab === 0 && (
              <GridSection
                displays={designs.animations.gradient}
                type={"gradient"}
                commonProps={commonProps}
              />
            )}

            {/* Spaces Layout */}
            {tab === 0 && (
              <GridSection
                displays={designs.animations.space}
                type={"space"}
                commonProps={commonProps}
              />
            )}

            {/* Classics Layout */}
            {tab === 0 && (
              <GridSection
                displays={designs.animations.classic}
                type={"classic"}
                commonProps={commonProps}
              />
            )}

            {/* Show only if the number isn't 0 */}
            {tab !== 0 && (
              <>
                {/* Individual section 1 */}
                {tab === 1 && (
                  <GridSection
                    displays={designs.animations.button}
                    type={"button"}
                    commonProps={commonProps}
                  />
                )}

                {/* Individual section 2 */}
                {tab === 2 && (
                  <GridSection
                    displays={designs.animations.gradient}
                    type={"gradient"}
                    commonProps={commonProps}
                  />
                )}

                {/* Individual section 3 */}
                {tab === 3 && (
                  <GridSection
                    displays={designs.animations.space}
                    type={"space"}
                    commonProps={commonProps}
                  />
                )}

                {/* Individual section 4 */}
                {tab === 4 && (
                  <GridSection
                    displays={designs.animations.classic}
                    type={"classic"}
                    commonProps={commonProps}
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
