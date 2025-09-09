import React from "react";
import SubHeading from "../ui/SubHeading";

interface CommonHeroProps {
  title: string;
}

const CommonHero: React.FC<CommonHeroProps> = ({ title }) => {
  return (
    <section className="bg-primary text-center py-8  sm:py-14">
      <div className="container mx-auto px-4">
       <SubHeading color="#ffffff" content={title} />
      </div>
    </section>
  );
};

export default CommonHero;
