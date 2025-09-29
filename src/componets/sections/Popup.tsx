"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePopup, Popup as PopupType } from "@/hooks/popup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Popup: React.FC = () => {
  const { allPopups } = usePopup();
  const [visible, setVisible] = useState(true);

  // Disable body scroll when popup is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!allPopups.data || allPopups.data.length === 0 || !visible) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 p-4"
      onClick={() => setVisible(false)}
    >
      <div className="relative">
           {/* Close Button */}
        <div onClick={() => setVisible(false)} className="h-8 absolute hover:bg-secondary top-4 right-4  cursor-pointer flex justify-center items-center z-10 w-8 bg-primary rounded-full">
          <button
            
            className=" text-white cursor-pointer font-bold text-2xl"
          >
            ✕
          </button>
        </div>
        <div
          className="bg-white rounded-xl shadow-lg w-full max-w-md h-[600px] relative overflow-auto touch-auto"
          onClick={(e) => e.stopPropagation()}
          style={{ WebkitOverflowScrolling: "touch" }}
        >
        
          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
          >
            {allPopups.data.map((popup: PopupType) => (
              <SwiperSlide key={popup._id}>
                <a href={popup.link} target="_blank" rel="noopener noreferrer">
                  <div
                    className="w-full overflow-auto"
                    onTouchStart={(e) => e.stopPropagation()}
                    style={{ WebkitOverflowScrolling: "touch" }}
                  >
                    <Image
                      src={popup.image}
                      alt="Popup Image"
                      width={400}
                      height={800}
                      className="w-full object-contain"
                    />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Popup;
