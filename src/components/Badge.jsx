import React from "react";

const Badge = ({ text, bgColor, textColor }) => {
  return (
    <div
      // style="padding-top: 0.1em; padding-bottom: 0.1rem"
      className={`mr-3 py-1 text-md font-semibold px-3 rounded-full ${bgColor} ${textColor}`}
    >
      {text}
    </div>
  );
};

export default Badge;
