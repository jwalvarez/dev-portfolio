import React from "react";

const TopHeader = () => {
  return (
    <div className="sticky h-10 w-full bg-indigo-600 lg:flex justify-center">
      {/* <img
        className="h-full object-none object-center"
        src="https://www.koaj.co/img/cms/ViveJeans-koaj.gif"
        alt=""
      /> */}
      <span className="text-gray-light text-sm font-bold my-auto">
        Esta es una página de muestra con datos ficticios.{" "}
      </span>
    </div>
  );
};

export default TopHeader;
