import TabButton from "../TabButton";

interface SortTabsProps {
  tab: number;
  handleSetTab: (tab: number) => void;
}

function SortTabs({ tab, handleSetTab }: SortTabsProps) {
  return (
    <>
      <p className="text-lg text-black font-medium">Animation type</p>
      <div className="flex flex-wrap gap-4">
        <TabButton
          name="All"
          selected={tab === 0 ? true : false}
          tab={0}
          callback={handleSetTab}
        />
        <TabButton
          name="Gradients"
          selected={tab === 1 ? true : false}
          tab={1}
          callback={handleSetTab}
        />
        <TabButton
          name="Backdrop Spaces"
          selected={tab === 2 ? true : false}
          tab={2}
          callback={handleSetTab}
        />
        <TabButton
          name="Classics"
          selected={tab === 3 ? true : false}
          tab={3}
          callback={handleSetTab}
        />
      </div>
    </>
  );
}

export default SortTabs;
