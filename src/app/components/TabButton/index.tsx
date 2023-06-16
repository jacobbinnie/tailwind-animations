import clsx from "clsx";

interface TabButtonProps {
  name: string;
  selected: boolean;
  tab: number;
  callback: (tab: number) => void;
}

function TabButton({ name, selected, tab, callback }: TabButtonProps) {
  return (
    <div
      onClick={() => callback(tab)}
      className={clsx(
        selected
          ? "animate-black-swoosh cursor-default ease-out"
          : "bg-gray-300 hover:px-6",
        "flex gap-2 bg-black text-sm font-semibold px-4 py-2 rounded-3xl transition-all cursor-pointer"
      )}
    >
      <span className="text-white">{name}</span>
    </div>
  );
}

export default TabButton;
