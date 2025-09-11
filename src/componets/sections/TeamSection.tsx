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
    name: "Sumit Sharma",
    position: "Founder & CEO",
    image: "/images/team/sumit-developer.jpg",
  },
  {
    id: 2,
    name: "Sunil Patel",
    position: "Marketing Head",
    image: "/images/team/sumit-developer.jpg",
  },
  {
    id: 3,
    name: "Rahul Verma",
    position: "Lead Developer",
    image: "/images/team/sumit-developer.jpg",
  },
  {
    id: 4,
    name: "Suraj Singh",
    position: "UI/UX Designer",
    image: "/images/team/sumit-developer.jpg",
  },
  {
    id: 5,
    name: "Anjali Mehta",
    position: "HR Manager",
    image: "/images/team/sumit-developer.jpg",
  },
  {
    id: 6,
    name: "Vikram Rao",
    position: "Backend Engineer",
    image: "/images/team/sumit-developer.jpg",
  },
  {
    id: 7,
    name: "Neha Gupta",
    position: "Frontend Engineer",
    image: "/images/team/sumit-developer.jpg",
  },
  {
    id: 8,
    name: "Amit Kumar",
    position: "QA Engineer",
    image: "/images/team/sumit-developer.jpg",
  },
  {
    id: 9,
    name: "Riya Sharma",
    position: "Content Strategist",
    image: "/images/team/sumit-developer.jpg",
  },
  {
    id: 10,
    name: "Karan Yadav",
    position: "Business Analyst",
    image: "/images/team/sumit-developer.jpg",
  },
];

const TeamSection = () => {
  const pathname = usePathname();

  // ✅ Agar homepage par ho to sirf 8 members dikhaye
  const displayedMembers =
    pathname === "/" ? teamMembers.slice(0, 8) : teamMembers;

  return (
    <div className="container mx-auto px-4 py-12">
      {pathname === "/" && <SubHeading content="Meet Our Team" />}

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayedMembers.map((member) => (
          <motion.div
            key={member.id}
            className="relative group bg-white rounded-2xl shadow-xl overflow-hidden p-4"
            whileHover={{ rotateY: 10, rotateX: 10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Image */}
            <div className="w-full h-56 overflow-hidden rounded-xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
  );
};

export default TeamSection;
