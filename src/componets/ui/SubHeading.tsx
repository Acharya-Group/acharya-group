import React from "react";

interface SubHeadingProps {
  content: string;
  color?: string; // custom hex/rgb color support
}

const SubHeading: React.FC<SubHeadingProps> = ({ content, color }) => {
  return (
    <h2
      className="text-2xl md:text-3xl font-semibold mb-3 sm:mb-6 text-center"
      style={{ color: color || "#261b7d" }} 
    >
      {content}
    </h2>
  );
};

export default SubHeading;
