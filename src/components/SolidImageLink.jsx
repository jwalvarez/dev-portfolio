import React from "react";

const SolidImageLink = ({ img }) => {
  return (
    <div className="mx-1 rounded-4xl bg-black/20 p-10 hover:-translate-y-4 hover:shadow-[0px_10px_0_rgba(165,180,252,1)] ease-linear duration-75 cursor-pointer">
      <div className="rounded-full p-2 my-4 flex justify-center">
        <img className="w-3/4" src={img} alt="" />
      </div>
      <h3 className="text-md font-bold text-center text-gray-light">
        Nombre largo
      </h3>
    </div>
  );
};

export default SolidImageLink;
