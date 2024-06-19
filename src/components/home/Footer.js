import React from "react";
import Facebook from "../../assest/facebook.svg";
import Twitter from "../../assest/twitter.svg";
import Insta from "../../assest/insta.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-8 px-5 md:px-20 bg-dark-navy flex flex-col sm:flex-row gap-5 items-center justify-between">
      <div className="flex flex-col s  m:flex-row items-center">
        <div className="py-4 text-3xl font-extrabold text-white">scoot</div>
        <ul className="sm:ml-10 flex flex-col sm:flex-row items-center text-dim-grey cursor-pointer">
          <li className="p-3  hover:text-yellow">About</li>
          <li className="p-3  hover:text-yellow">Location</li>
          <li className="p-3  hover:text-yellow">Careers</li>
        </ul>
      </div>
      <div className="flex gap-6 my-5 hover:*:scale-110 *:duration-75 *:cursor-pointer">
      <img alt="social media" src={Facebook} width="24px"/>
      <img alt="social media" src={Twitter} width="24px"/>
      <img alt="social media" src={Insta} width="24px"/>
      </div>
    </div>
  );
};

export default Footer;
