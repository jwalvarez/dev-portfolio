import React from "react";
import img from "../assets/5e53523e8e24936f0704284f_peep-17.png";
import Button from "./Button";

const Banner = () => {
  return (
    <>
      <div className="absolute "></div>
      <div className="h-auto flex ">
        <div className="my-auto w-1/2 bg-indigo-50/80 px-20 py-16 rounded-4xl backdrop-blur-md shadow-[0px_0px_0_rgba(79,70,229,1)] hover:-translate-y-4 hover:shadow-[0px_10px_0_rgba(79,70,229,1)] ease-linear duration-75">
          <h2 className="font-black text-2xl my-auto">
            Hola. <br />
          </h2>
          <h2 className="font-black text-4xl my-auto">
            Soy Jhon Alvarez <br />
          </h2>
          <h2 className="font-black text-2xl my-auto">
            Desarrollador Front-end
          </h2>
          <div className="my-6 flex">
            <Button label={"Contactar"} />
            <Button label={"Descargar CV"} type="" />
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img className="w-3/4" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
