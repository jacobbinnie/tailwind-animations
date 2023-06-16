import DefaultComponent from "@/app/components/DisplayComponent";
import GridSection from "@/app/components/GridSection";
import SortTabs from "@/app/components/SortTabs";
import TabButton from "@/app/components/TabButton";
import { useState } from "react";
import designs from "./../../util/designs.json";

interface DashboardProps {}

function Dashboard({}: DashboardProps) {
  const [tab, setTab] = useState(0);

  const handleSetTab = (tab: number) => {
    setTab(tab);
  };

  return (
    <div className="w-full min-w-screen h-full min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-white to-white">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        {/* Filter Bar */}
        <div className="flex gap-4 mb-12 flex-col">
          <SortTabs tab={tab} handleSetTab={handleSetTab} />
        </div>

        <div className="flex flex-col w-full gap-20">
          {/* Gradients Layout */}
          <GridSection
            designs={designs.animations.gradients}
            type={"gradient"}
          />

          {/* Backdrop Spaces Layout */}
          <GridSection
            designs={designs.animations.backdropSpaces}
            type={"backdrop space"}
          />

          {/* Backdrop Spaces Layout */}
          <GridSection designs={designs.animations.classics} type={"classic"} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
