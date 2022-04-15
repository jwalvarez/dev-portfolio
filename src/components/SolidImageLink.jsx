import React from "react";

const SolidImageLink = ({ img }) => {
  return (
    <div className="m-4 rounded-2xl bg-slate-50 p-10 hover:-translate-y-4 hover:shadow-[0px_10px_0_rgba(165,180,252,1)] ease-linear duration-75">
      <div className="bg-indigo-300 rounded-full p-2 my-4 flex justify-center">
        <img className="w-3/4" src={img} alt="" />
      </div>
      <h3 className="text-lg font-bold text-center">Nombre largo</h3>
    </div>
  );
};

export default SolidImageLink;
