import DefaultComponent from "@/app/components/DefaultComponent";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface DashboardProps {}

function Dashboard({}: DashboardProps) {
  return (
    <div className="w-full h-full min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-white to-white">
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="grid gap-y-20 gap-x-6 py-18 md:grid-cols-2 lg:grid-cols-4">
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
