"use client"
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Video from "../gallery/Video";
import GalleryImg from "../gallery/GalleryImg";
import Award2025 from "../gallery/Award2025";
import Award2024 from "../gallery/Award2024";
import BestWishes from "../gallery/BestWishes";
import EMitraImages from "../gallery/EMitraImages";
import Events from "../gallery/Events";
import NewsPapers from "../gallery/NewsPapers";

type Tab = {
  id: number;
  title: string;
  component: React.ComponentType;
};

const Gallery = () => {
  const pathname = usePathname();

  // ✅ Tabs with their corresponding components
  const tabs: Tab[] = [
    { id: 1, title: "Videos", component: Video },
    { id: 2, title: "Gallery", component: GalleryImg },
    { id: 3, title: "RKCL'S ITGK AWARD FUNCTION - 2025", component: Award2025 },
    { id: 4, title: "Annual Meeting / Awards - 2024", component: Award2024 },
    { id: 5, title: "Best Wishes / Appreciation", component: BestWishes },
    { id: 6, title: "e-Mitra Samman Samaroh", component: EMitraImages },
    { id: 7, title: "Events / Programs", component: Events },
    { id: 8, title: "NewsPapers", component: NewsPapers },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // ✅ Get the active tab's component
  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="container mx-auto px-4 py-12 relative">
      {/* Tabs Section */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300
              ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-secondary text-white hover:bg-primary"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      
      {/* Tab Content Section */}
      <div className="tab-content">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};

export default Gallery;