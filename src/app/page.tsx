import Header from "@/componets/layout/Header";
import About from "@/componets/sections/About";
import Collaborations from "@/componets/sections/Collaborations";
import Contact from "@/componets/sections/Contact";
import Faqs from "@/componets/sections/Faqs";
import Gallery from "@/componets/sections/Gallery";
import Hero from "@/componets/sections/Hero";
import Projects from "@/componets/sections/Projects";
import Testimonials from "@/componets/sections/Testimonials";
import VerifyApply from "@/componets/sections/VerifyApply";

export default function Home() {
  return (
   <>
   <Header/>
   <Hero />
   <VerifyApply/>
   <About/>
   <Projects/>
   <Collaborations/>
   <Gallery/>
   <Testimonials/>
   <Faqs/>
   <Contact/>
   </>
  );
}
