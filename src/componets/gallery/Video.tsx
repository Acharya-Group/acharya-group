"use client";

import { videoItems } from "@/lib/utils";
import React, { useState, useEffect } from "react";

const Video = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Grid of Videos or Skeleton Loaders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          // Skeleton loading state
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <div className="relative pb-[56.25%] bg-gray-200 animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded-full w-3/4 mb-2 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded-full w-1/2 animate-pulse"></div>
              </div>
            </div>
          ))
        ) : (
          // Loaded video content
          videoItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white"
            >
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={item.videoLink}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Video ${item.id}`}
                ></iframe>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Video;