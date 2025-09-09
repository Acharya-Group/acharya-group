"use client";
import React from "react";
import SubHeading from "../ui/SubHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Testimonials = () => {
const Testimonial = [
  {
    id: 1,
    image: "/images/review1.jpg",
    title: "Rahul Sharma",
    description:
      "Acharya Group’s team was very supportive and guided us at every step. Their service quality is excellent.",
  },
  {
    id: 2,
    image: "/images/review2.jpg",
    title: "Priya Mehta",
    description:
      "Working with Acharya Group was a smooth experience. They delivered our project on time with great results.",
  },
  {
    id: 3,
    image: "/images/review3.jpg",
    title: "Amit Verma",
    description:
      "I truly appreciate the professionalism and expertise of the Acharya Group team. Highly recommended!",
  },
  {
    id: 4,
    image: "/images/review4.jpg",
    title: "Neha Patel",
    description:
      "The dedication by Acharya Group was remarkable. They understood our needs and executed",
  },
  {
    id: 5,
    image: "/images/review5.jpg",
    title: "Suresh Iyer",
    description:
      "We are very satisfied with the outcome. Acharya Group provided innovative solutions and reliable support.",
  },
];


  return (
    <section className="bg-primary-50">
        <div className="container mx-auto px-4 py-12 relative">
          <SubHeading content="What Our Clients Say" />
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={800}
              loop={true}
              pagination={{
                el: ".projects-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".project-next",
                prevEl: ".project-prev",
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="overflow-visible"
            >
              {Testimonial.map((project) => (
            <SwiperSlide key={project.id}>
          <div className="p-[2px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_200%] animate-borderSpin">
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
          <Image
          height={80}
          width={80}
            src={project.image}
            alt={project.title}
            className="w-20 h-20 rounded-full mb-4 shadow-lg"
          />
          <h3 className="text-lg font-semibold text-center mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm text-center italic">
            "{project.description}"
          </p>
        </div>
          </div>
        </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation */}
            <button className="absolute cursor-pointer hidden project-prev left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full h-10 w-10 sm:flex justify-center items-center shadow hover:bg-secondary transition-all">
               <FiArrowLeft/>
            </button>
            <button className="absolute cursor-pointer hidden project-next right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full h-10 w-10 sm:flex justify-center items-center shadow hover:bg-secondary transition-all">
             <FiArrowRight/>
            </button>
          </div>
          {/* Pagination Dots */}
          <div className="projects-pagination mt-6 flex justify-center gap-2 [&>.swiper-pagination-bullet]:bg-gray-400 [&>.swiper-pagination-bullet]:w-3 [&>.swiper-pagination-bullet]:h-3 [&>.swiper-pagination-bullet]:rounded-full [&>.swiper-pagination-bullet-active]:bg-primary"></div>
        </div>
    </section>
  );
};

export default Testimonials;
