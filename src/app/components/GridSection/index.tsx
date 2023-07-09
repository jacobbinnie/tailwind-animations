import clsx from "clsx";
import DisplayComponent from "../DisplayComponent";
import JSONDesigns from "../../util/designs.json";
import ButtonComponent from "../ButtonComponent";
import { Buttons, Designs, types } from "@/app/interfaces";

interface GridSectionProps {
  displays: Designs | Buttons;
  type: "button" | "gradient" | "space" | "classic";
  commonProps: {
    handleAssignAction: (type?: "copy") => boolean;
    handleSetSelectedKey: (key: string, type: types) => void;
  };
}

function GridSection({ displays, type, commonProps }: GridSectionProps) {
  const { handleAssignAction, handleSetSelectedKey } = commonProps;

  const renderDisplay = () => {
    if (!displays) {
      return null; // or handle the case when `displays` is undefined/null
    }

    return Object.entries(displays).map(([key, value]) => {
      switch (type) {
        case "button":
          return (
            <ButtonComponent
              key={key}
              buttonCode={value.button}
              handleAssignAction={handleAssignAction}
            />
          );

        default:
          return (
            <DisplayComponent
              key={key}
              name={key}
              animation={
                type === "space"
                  ? `animate-${value.animation}`
                  : `hover:animate-${value.animation}`
              }
              type={type}
              handleSetSelectedKey={handleSetSelectedKey}
              handleAssignAction={handleAssignAction}
            />
          );
      }
    });
  };

  return (
    <div className="flex w-full flex-col">
      <p className="text-black capitalize text-3xl font-semibold">
        {type + "s"}
      </p>
      <p className="mt-3 text-sm text-black font-medium mb-4">
        {JSONDesigns.descriptions[type]}
      </p>
      <div className="w-full h-1 opacity-30 rounded bg-gray-300 mb-10" />
      <div
        className={clsx(
          type !== "space" && "md:grid-cols-3 lg:grid-cols-4",
          "grid gap-y-20 gap-x-6 py-18 sm:grid-cols-2"
        )}
      >
        {renderDisplay()}
        <div className="flex justify-top items-end w-full rounded flex-col h-full">
          <p className="text-sm text-right font-semibold uppercase text-gray-300">
            + More {type + "s"} Coming Soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default GridSection;
