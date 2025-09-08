import React from "react";

interface SubHeadingProps {
  content: string;
  align?: "left" | "center" | "right";
}

const SubHeading: React.FC<SubHeadingProps> = ({ content, align = "center" }) => {
  return (
    <h2
      className={`text-2xl md:text-3xl font-semibold text-primary mb-3 sm:mb-6 text-${align}`}
    >
      {content}
    </h2>
  );
};

export default SubHeading;
