"use client"
import React, { useState } from "react";
import Link from "next/link";
import SubHeading from "../ui/SubHeading";
import Button from "../ui/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { galleryItems } from "@/lib/utils";

type Tab = {
  id: number;
  title: string;
};

const Gallery = () => {
  const pathname = usePathname();

  // ✅ Tabs
  const tabs: Tab[] = [
    { id: 1, title: "Videos" },
    { id: 2, title: "Gallery" },
    { id: 3, title: "RKCL'S ITGK AWARD FUNCTION - 2025" },
    { id: 4, title: "Annual Meeting / Awards - 2024" },
    { id: 5, title: "Best Wishes / Appreciation" },
    { id: 6, title: "e-Mitra Samman Samaroh" },
    { id: 7, title: "Events / Programs" },
    { id: 8, title: "NewsPapers" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // ✅ filter items by active tab
  const filteredItems = galleryItems.filter(
    (item) => item.category === activeTab
  );

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

      {pathname === "/" ? <SubHeading content="Gallery" /> : ""}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg shadow-md">
            {activeTab === 1 ? (
              // ✅ Video iframe for Videos Tab
              <iframe
                width="100%"
                height="250"
                src={item.videoLink}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            ) : (
              // ✅ Image for other Tabs
              <Image
                height={200}
                width={300}
                src={item.image}
                alt="Gallery Image"
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            )}
          </div>
        ))}
      </div>

      {/* Show More Button केवल home page पर दिखे */}
      {pathname === "/" && (
        <div className="flex justify-center mt-8">
          <Link href="/gallery">
            <Button content="Show more" className="w-auto px-6 cursor-pointer" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Gallery;
