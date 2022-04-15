import React from "react";

const Button = ({ label, type = "primary" }) => {
  return (
    <a
      href="#"
      className={
        type == "primary"
          ? "m-2 w-52 px-10 flex justify-center py-4 border-2 border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-500"
          : "m-2 w-auto px-10 flex border-2 border-indigo-600 justify-center py-4 text-base font-medium rounded-xl text-indigo-600 backdrop-blur-sm hover:bg-indigo-50/20 hover:border-indigo-400 hover:text-indigo-400 ease-linear duration-500"
      }
    >
      {label}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg> */}
    </a>
  );
};

export default Button;
