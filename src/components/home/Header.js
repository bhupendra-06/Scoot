import React from "react";
import BurgerIcon from "./BurgerIcon";

export const Header = () => {
  return (
    <div className="w-full py-4 px-20 flex items-center justify-center md:justify-between">
      <div className="flex">
        <div className="text-3xl font-extrabold text-dark-navy">scoot</div>
        <ul className="ml-10 hidden md:flex items-center text-dim-grey cursor-pointer">
          <li className="px-4  hover:text-yellow">About</li>
          <li className="px-4  hover:text-yellow">Location</li>
          <li className="px-4  hover:text-yellow">Careers</li>
        </ul>
      </div>
      <button className="hidden md:inline ml-2 px-5 py-2  rounded-sm border-2 border-yellow bg-yellow text-white font-bold duration-200 hover:bg-transparent hover:text-yellow">
        Get Scootin
      </button>
      {/* HamBurger icon */}
      <div className="absolute my-auto left-2 md:hidden">
        <BurgerIcon/>
      </div>
    </div>
  );
};
