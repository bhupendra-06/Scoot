import React from "react";
import BurgerIcon from "./BurgerIcon";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-full py-4 px-20 flex items-center justify-center md:justify-between">
      <div className="flex">
        <Link to="/"><div className="text-3xl font-extrabold text-dark-navy">scoot</div></Link>
        <ul className="ml-10 hidden md:flex items-center text-dim-grey cursor-pointer">
          <Link to="/about" className="px-4  hover:text-yellow focus:text-yellow">About</Link>
          <Link to="/location" className="px-4  hover:text-yellow focus:text-yellow">Location</Link>
          <Link to="/contact" className="px-4  hover:text-yellow focus:text-yellow">Careers</Link>
        </ul>
      </div>
      <Link to="/">      
         <button className="hidden md:inline ml-2 px-5 py-2  rounded-sm border-2 border-yellow bg-yellow text-white font-bold duration-200 hover:bg-transparent hover:text-yellow">
            Get Scootin
          </button>
      </Link>
      {/* HamBurger icon */}
      <div className="absolute my-auto left-2 md:hidden">
        <BurgerIcon />
      </div>
    </div>
  );
};
