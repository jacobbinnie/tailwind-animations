import clsx from "clsx";
import DisplayComponent from "../DisplayComponent";

type Designs = {
  [key: string]: string;
};

interface GridSectionProps {
  designs: Designs;
  type: "gradient" | "backdrop space" | "classic";
}

function GridSection({ designs, type }: GridSectionProps) {
  const renderDesigns = () => {
    return Object.entries(designs).map(([key, value]) => {
      return (
        <DisplayComponent
          key={key}
          name={key}
          animation={
            type === "backdrop space"
              ? `animate-${value}`
              : `hover:animate-${value}`
          }
          type={type}
        />
      );

      return null; // Optional: handle the case when the desired value is not found
    });
  };

  return (
    <div
      className={clsx(
        type !== "backdrop space" && "md:grid-cols-3 lg:grid-cols-4",
        "grid gap-y-20 gap-x-6 py-18 sm:grid-cols-2"
      )}
    >
      {renderDesigns()}
    </div>
  );
}

export default GridSection;
