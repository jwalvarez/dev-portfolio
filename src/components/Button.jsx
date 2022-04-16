import React from "react";

const Button = ({ label, type = "primary", href, showIcon = false }) => {
  return (
    <a
      href={href}
      className={
        type == "primary"
          ? "mr-4 my-auto w-40 h-14 px-10 flex justify-center py-2 border-2 border-transparent text-base font-medium rounded-2xl text-white bg-indigo-500 hover:bg-indigo-600 drop-shadow-[0px_0px_0_rgba(79,70,229,1)] hover:-translate-y-1 hover:drop-shadow-[6px_6px_0_rgba(0,0,0,1)] ease-linear duration-75 cursor-pointer"
          : "mr-4 my-auto w-42 h-14 px-10 flex border-2 border-gray-light justify-center py-2 text-base font-medium rounded-2xl text-gray-light hover:bg-indigo-100 hover:border-indigo-100 hover:text-indigo-600 ease-linear duration-300 cursor-pointer"
      }
    >
      {showIcon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          className="bi bi-arrow-up-right my-auto pr-2"
          viewBox="0 0 16 16"
        >
          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
        </svg>
      )}
      <span className="my-auto">{label}</span>
    </a>
  );
};

export default Button;
