import About from "@/componets/sections/About";
import Collaborations from "@/componets/sections/Collaborations";
import Faqs from "@/componets/sections/Faqs";
import Hero from "@/componets/sections/Hero";
import Projects from "@/componets/sections/Projects";
import Testimonials from "@/componets/sections/Testimonials";
import VerifyApply from "@/componets/sections/VerifyApply";

export default function Home() {
  return (
   <>
   <Hero />
   <VerifyApply/>
   <About/>
   <Projects/>
   <Collaborations/>
   <Testimonials/>
   <Faqs/>
   </>
  );
}
