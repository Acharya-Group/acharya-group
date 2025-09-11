import React from "react";
import Link from "next/link";

const NewsAndMedia = () => {
  const cards = [
    { title: "Videos", link: "/videos" },
    { title: "RKCL'S ITGK AWARD FUNCTION - 2025", link: "/award-2025" },
    { title: "Annual Meeting / Awards - 2024", link: "/annual-meeting-2024" },
    { title: "Best Wishes / Appreciation", link: "/best-wishes" },
    { title: "e-Mitra Samman Samaroh", link: "/samman-samaroh" },
    { title: "Events / Programs", link: "/events" },
    { title: "NewsPapers", link: "/newspapers" },
    { title: "e-Mitra Kiosk Training Programs", link: "/training-programs" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link key={index} href={card.link}>
            <div className="relative group cursor-pointer">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-spin-slow blur-sm"></div>

              {/* Inner Card */}
              <div
                className="relative bg-secondary hover:bg-primary text-white font-semibold rounded-2xl 
                           shadow-md flex items-center justify-center text-center 
                           h-40 w-full p-4 transition duration-300 
                           group-hover:scale-105 group-hover:shadow-xl"
              >
                {card.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsAndMedia;
