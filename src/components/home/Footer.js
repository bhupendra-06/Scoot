import React from "react";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Insta from "../../assets/insta.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-52 bg-footer bg-cover bg-bottom">

      </div>
      <div className="w-full py-1 px-5 md:px-20 bg-gray-900 flex flex-col sm:flex-row gap-5 items-center justify-between">
        <div className="flex flex-col md:flex-row items-center">
          <div className="py-4 text-3xl font-extrabold text-white">scoot</div>
          <ul className="sm:ml-10 flex flex-col sm:flex-row items-center text-dim-grey cursor-pointer">
            <Link to="/about" className="p-3  hover:text-yellow">
              About
            </Link>
            <Link to="/location" className="p-3  hover:text-yellow">
              Location
            </Link>
            <Link to="/contact" className="p-3  hover:text-yellow">
              Careers
            </Link>
          </ul>
        </div>
        <div className="flex gap-6 my-5 hover:*:scale-110 *:duration-75 *:cursor-pointer">
          <img alt="social media" src={Facebook} width="24px" />
          <img alt="social media" src={Twitter} width="24px" />
          <img alt="social media" src={Insta} width="24px" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
