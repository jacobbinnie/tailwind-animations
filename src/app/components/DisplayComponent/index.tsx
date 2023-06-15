import { ArrowRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

interface DisplayComponentProps {
  name: string;
  animation: string;
}

export const DisplayComponent: React.FC<DisplayComponentProps> = ({
  name,
  animation,
}) => {
  return (
    <div className="flex w-full flex-col h-full">
      <div className={`bg-black h-48 w-full transition-all ${animation}`} />
      <p className="mt-5 text-lg font-semibold leading-6 uppercase text-black">
        {name}
      </p>
      {/* <p className="mt-3 text-base text-gray-500">
        Your design portfolio website shouldn’t just be a portfolio, it should
        also be a sales tool.
      </p> */}
      <div className="flex gap-3 mt-5 justify-left">
        <a className="inline-flex items-center justify-center text-sm duration-200 focus:outline-none focus-visible:outline-gray-600">
          <div className="flex gap-2 bg-black px-4 py-2 rounded-3xl transition-all hover:px-6 hover:animate-green-swoosh cursor-pointer">
            <span className="text-white font-semibold">Get Code</span>
            <ArrowRightIcon width={16} color="white" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default DisplayComponent;
