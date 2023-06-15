import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface DefaultComponentProps {}

export const DefaultComponent: React.FC<DefaultComponentProps> = () => {
  return (
    <div className="flex w-full flex-col h-full">
      <div className="bg-black h-48 w-full " />
      <p className="mt-5 text-lg font-medium leading-6 text-black">
        G-Radient is back in town
      </p>
      <p className="mt-3 text-base text-gray-500">
        Your design portfolio website shouldn’t just be a portfolio, it should
        also be a sales tool.
      </p>
      <div className="flex gap-3 mt-10 justify-left">
        <a className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600">
          <div className="flex gap-2 bg-black px-4 py-2 rounded-3xl transition-all hover:animate-gradient-green">
            <span className="text-white">Get Code</span>
            <ArrowRightIcon width={16} color="white" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default DefaultComponent;
