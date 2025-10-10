"use client"
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "@/componets/layout/Footer";
import Header from "@/componets/layout/Header";
import About from "@/componets/sections/About";
import Blog from "@/componets/sections/Blog";
import Collaborations from "@/componets/sections/Collaborations";
import Contact from "@/componets/sections/Contact";
import Faqs from "@/componets/sections/Faqs";
import Hero from "@/componets/sections/Hero";
import Popup from "@/componets/sections/Popup";
import Projects from "@/componets/sections/Projects";
import Services from "@/componets/sections/Services";
import Testimonials from "@/componets/sections/Testimonials";
import VerifyApply from "@/componets/sections/VerifyApply";

export default function Home() {
   useEffect(() => {
    AOS.init({
      once: true,    
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <VerifyApply />
      <About />
      <Projects />
      <Collaborations />
      <Services />
      <Testimonials />
      <Faqs />
      <Blog/>
      <Contact />
      <Footer />
      <Popup />
    </>
  );
}
