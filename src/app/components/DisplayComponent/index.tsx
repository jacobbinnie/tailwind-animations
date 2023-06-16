import {
  ArrowRightIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

interface DisplayComponentProps {
  name: string;
  animation: string;
  type: "gradient" | "space" | "classic";
  handleSetSelectedKey: (key: string) => void;
}

export const DisplayComponent: React.FC<DisplayComponentProps> = ({
  name,
  animation,
  type,
  handleSetSelectedKey,
}) => {
  return (
    <div className="flex w-full flex-col h-full">
      <div
        className={clsx(
          type === "classic"
            ? "w-48"
            : type === "space"
            ? "hover:none"
            : "hover:scale-90",
          `bg-black flex justify-center items-center rounded h-48 w-full transition-all duration-1000 ease-in-out ${animation}`
        )}
      >
        {type === "gradient" ||
          (type === "classic" && (
            <div className="w-full flex justify-center h-full hover:opacity-0 overflow-hidden transition-all">
              <CursorArrowRippleIcon width={20} className="text-gray-300" />
            </div>
          ))}
      </div>
      <p className="mt-3 text-sm text-gray-300 font-medium">
        {type.toUpperCase()}
      </p>
      <p className="mt-1 text-lg font-semibold leading-6 uppercase text-black">
        {name}
      </p>

      <div className="flex gap-3 mt-5 justify-left">
        <a className="inline-flex items-center justify-center text-sm duration-200 focus:outline-none focus-visible:outline-gray-600">
          <div
            onClick={() => handleSetSelectedKey(name)}
            className="flex gap-2 bg-black px-4 py-2 rounded-3xl transition-all hover:px-6 hover:animate-green-swoosh cursor-pointer"
          >
            <span className="text-white font-semibold">Show Code</span>
            <ArrowRightIcon width={16} color="white" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default DisplayComponent;
