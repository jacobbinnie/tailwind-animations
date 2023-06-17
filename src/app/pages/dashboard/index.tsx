import GridSection from "@/app/components/GridSection";
import SortTabs from "@/app/components/SortTabs";
import { useState } from "react";
import designs from "./../../util/designs.json";
import CodeReveal from "@/app/components/CodeReveal";
import clsx from "clsx";
import ButtonComponent from "@/app/components/ButtonComponent";

interface DashboardProps {}

function Dashboard({}: DashboardProps) {
  const [tab, setTab] = useState(0);
  const [revealingCode, setRevealingCode] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");

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

  return (
    <>
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

        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
          {/* Filter Bar */}
          <div className="flex gap-4 mb-12 flex-col">
            <SortTabs tab={tab} handleSetTab={handleSetTab} />
          </div>

          <div className="flex flex-col w-full gap-20">
            {/* Buttons Layout */}
            <GridSection
              displays={designs.animations.buttons}
              type={"button"}
              handleSetSelectedKey={handleSetSelectedKey}
            />

            {/* Gradients Layout */}
            <GridSection
              displays={designs.animations.gradients}
              type={"gradient"}
              handleSetSelectedKey={handleSetSelectedKey}
            />

            {/* Spaces Layout */}
            <GridSection
              displays={designs.animations.backdropSpaces}
              type={"space"}
              handleSetSelectedKey={handleSetSelectedKey}
            />

            {/* Classics Layout */}
            <GridSection
              displays={designs.animations.classics}
              type={"classic"}
              handleSetSelectedKey={handleSetSelectedKey}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
