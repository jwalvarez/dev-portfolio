import React, { useState } from "react";

const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Quien soy", href: "#quiensoy" },
  { name: "Casos de éxito", href: "#proyectos" },
];

const Header = () => {
  window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY;
    scroll > 100 ? setIsInTop(false) : setIsInTop(true);
  });
  const [isInTop, setIsInTop] = useState(true);

  return (
    <header
      // className={
      //   isInTop
      //     ? "bg-transparent sticky top-0 z-50 w-full px-40 ease-in-out duration-500 border-none border-b-gray-light/40"
      //     : "bg-black/30 sticky z-50 top-0 w-full px-40 backdrop-blur-lg ease-in-out duration-100 border-b-gray-light/40 border-b-2 "
      // }
      className="bg-black/30 sticky z-50 top-0 w-full md:px-40 px-10 backdrop-blur-lg ease-in-out duration-100 border-b-gray-light/40 border-b-2"
    >
      <nav className="flex justify-between h-20">
        <span className="my-auto text-3xl text-gray-light font-bold flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-circle-half text-gray-light mr-4"
            viewBox="0 0 16 16"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
          </svg>
          <h1 className="md:block hidden">Portafolio</h1>
        </span>
        <div className="flex justify-items-center align-middle my-auto ml-10 pr-4 space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hidden lg:flex font-medium text-white hover:text-gray-light/20 my-auto"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contactar"
            className="my-auto font-medium text-indigo-50 hover:text-indigo-200 bg-indigo-600 px-4 py-2 rounded-lg border-none"
          >
            Contactar
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
