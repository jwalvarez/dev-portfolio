import React from "react";

const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Quien soy", href: "#" },
  { name: "Casos de éxito", href: "#" },
  { name: "Tecnologias", href: "#" },
];

const Header = () => {
  return (
    <div className="fixed z-50 w-full px-40 border-b-3 backdrop-blur-lg bg-slate-50/10">
      <nav className="flex justify-between h-20">
        <span className="my-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-feather"
          >
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
            <line x1="16" y1="8" x2="2" y2="22"></line>
            <line x1="17.5" y1="15" x2="9" y2="15"></line>
          </svg>
        </span>
        <div className="flex justify-items-center align-middle my-auto ml-10 pr-4 space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-normal text-white hover:text-gray-light/20 my-auto"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contactar"
            className="font-medium text-indigo-50 hover:text-indigo-200 bg-indigo-600 px-6 py-2 rounded-lg"
          >
            Contactar
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
