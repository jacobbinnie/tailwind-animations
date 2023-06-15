import clsx from "clsx";
import DisplayComponent from "../DisplayComponent";
import JsonDesigns from "./../../util/designs.json";

type Designs = {
  [key: string]: string;
};

interface GridSectionProps {
  largeDisplay: boolean;
  designs: Designs;
  type: string;
}

function GridSection({ largeDisplay, designs, type }: GridSectionProps) {
  const renderDesigns = () => {
    return Object.keys(designs).map((key) => {
      const animation = designs[key];
      if (animation !== undefined) {
        return (
          <DisplayComponent
            key={key}
            name={key}
            animation={`animate-${animation}`}
          />
        );
      }
    });
  };

  return (
    <div
      className={clsx(
        largeDisplay === false && "md:grid-cols-3 lg:grid-cols-4",
        "grid gap-y-20 gap-x-6 py-18 sm:grid-cols-2"
      )}
    >
      {renderDesigns()}
    </div>
  );
}

export default GridSection;
