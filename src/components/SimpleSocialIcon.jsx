import React from "react";

const SimpleSocialIcon = ({ path }) => {
  return (
    <span className="mr-2 w-12 h-12 bg-gray-light rounded-full flex cursor-pointer drop-shadow-[0px_0px_0_rgba(79,70,229,1)] hover:-translate-y-2 hover:drop-shadow-[0px_6px_0_rgba(79,70,229,1)] ease-linear duration-75">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        className="bi bi-instagram m-auto text-black"
        viewBox="0 0 16 16"
      >
        <path d={path} />
      </svg>
    </span>
  );
};

export default SimpleSocialIcon;
