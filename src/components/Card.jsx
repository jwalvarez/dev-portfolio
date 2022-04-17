import React from "react";
import "../assets/light-bulb.svg";

const colors = {
  primary: "#000",
};

const Card = () => {
  return (
    <div className="bg-indigo-50 w-65 h-60 mr-4 my-6 p-8 rounded-4xl cursor-default drop-shadow-[0px_0px_0_rgba(79,70,229,1)] hover:-translate-y-4 hover:drop-shadow-[0px_10px_0_rgba(79,70,229,1)] ease-linear duration-75">
      <div className="flex justify-items-center">
        <span className="my-2 mr-2 p-2 rounded-full bg-indigo-400 border-8 border-indigo-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </span>
        <h3 className="font-bold text-lg my-auto">Competente</h3>
      </div>
      <p className="font-normal text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Card;
