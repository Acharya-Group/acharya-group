"use client";

import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../ui/Button";
import SubHeading from "../ui/SubHeading";

const teamMembers = [
  {
    id: 1,
    name: "Yespal Singh",
    position: "CEO & Founder",
    image: "/images/directorImg.png",
  },
  {
    id: 2,
    name: "M L Jhalani",
    position: "General Manager",
    image: "/images/team/gm.jpg",
  },
  {
    id: 3,
      name: "Sachin Kumar",
    position: "Operation Manager",
   image: "/images/team/sachin.jpg",
   
  },
   {
    id: 4,
    name: "Ram lal",
    position: "Project Manager ( RGB)",
   image: "/images/team/ramlal.jpg",
  },
  {
    id: 5,
   name: "Sanjay Kumar",
    position: "Project Manager (RKCL)",
   image: "/images/team/sanjay-rkcl.jpg",
  },
  {
    id: 6,
    name: "Attender sir",
    position: "Project Manager (BOB)",
   image: "/images/team/bob.jpg",
  },
  {
    id: 7,
    name: "Ritika Nain",
    position: "Project Manager (YOGA/Emitra)",
   image: "/images/team/ritikaNew.jpg",
  },
   {
    id: 8,
    name: "Parmila Dagar",
    position: "State Coordinator (Emitra)",
   image: "/images/team/parmila.jpg",
  },
   {
    id: 9,
    name: "Miss Vaibhavi",
    position: "Project Manager (CBI/BOI)",
   image: "/images/team/vaibhavi.jpg",
  },
 

];

const TeamSection = () => {
  const pathname = usePathname();

  // ✅ Agar homepage par ho to sirf 8 members dikhaye
  const displayedMembers =
    pathname === "/" ? teamMembers.slice(0, 8) : teamMembers;

  return (
    <div className="overflow-hidden relative">
       <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 top-[-40px] left-[-40px] rounded-full"></div>
 <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 bottom-[-40px] right-[-40px] rounded-full"></div>
      <div className="container mx-auto px-4 py-12">
        {pathname === "/" && <SubHeading content="Meet Our Team" />}
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayedMembers.map((member) => (
            <motion.div
              key={member.id}
              className="relative group bg-white rounded-2xl shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-4"
              whileHover={{ rotateY: 10, rotateX: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div></div>
              {/* Image */}
              <div className="w-full h-56 overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Info */}
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Show More button (only on "/") */}
        {pathname === "/" && (
          <div className="text-center mt-10">
            <Link className="inline-block" href="/team">
              <Button content="View More" className="px-6" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
