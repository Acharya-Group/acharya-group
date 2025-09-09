"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const slides = [
    "/images/hero-slide-1.jpg",
    "/images/hero-slide-2.jpg",
    "/images/hero-slide-3.jpg",
  ];

  return (
    <div className="relative w-full">
      {/* Swiper */}
      <Swiper
        modules={[Navigation,Autoplay]}
        loop={true}
        speed={800}
         autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
        slidesPerView={1}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        className="hero_slider w-full h-[150px] sm:h-[300px] lg:h-[400px]"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[150px] sm:h-[300px] lg:h-[400px]">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                width={1600}
                height={500}
                priority={index === 0}
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="hero-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary p-3 rounded-full shadow text-white sm:h-10 sm:w-10 h-8 w-8 flex justify-center items-center cursor-pointer hover:bg-secondary transition-all duration-300">
        <FiArrowLeft/>
      </button>
      <button className="hero-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary p-3 rounded-full shadow text-white sm:h-10 sm:w-10 h-8 w-8 flex justify-center items-center cursor-pointer hover:bg-secondary transition-all duration-300">
        <FiArrowRight/>
      </button>
    </div>
  );
};

export default Hero;
