import DefaultComponent from "@/app/components/DefaultComponent";
import SortTabs from "@/app/components/SortTabs";
import TabButton from "@/app/components/TabButton";
import { useState } from "react";

interface DashboardProps {}

function Dashboard({}: DashboardProps) {
  const [tab, setTab] = useState(0);

  const handleSetTab = (tab: number) => {
    setTab(tab);
  };

  return (
    <div className="w-full min-w-screen h-full min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-white to-white">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-8xl">
        {/* Filter Bar */}
        <div className="flex gap-4 mb-12 flex-col">
          <SortTabs tab={tab} handleSetTab={handleSetTab} />
        </div>

        {/* Grid Layout */}
        <div className="grid gap-y-20 gap-x-6 py-18 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
          <DefaultComponent />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
