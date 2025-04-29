import { useState } from "react";

export function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex border-b border-gray-300 dark:border-gray-600">
      {tabs.map((tab, idx) => (
        <button
          key={tab}
          onClick={() => setActiveTab(idx)}
          className={`relative py-2 px-4 text-sm font-medium transition ${
            activeTab === idx
              ? "text-orange-500 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-orange-500"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
