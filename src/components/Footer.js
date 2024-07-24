import React from "react";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Insta from "../assets/insta.svg";
import PlayStore from "../assets/playstore.svg";
import AppStore from "../assets/appstore.svg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Footer = () => {

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".gsapFooter",{
      scale: 1.5,
      duration: 1.2,
      ease: "elastic.out(0.5,0.3)",
      scrollTrigger:{
        trigger: ".gsapFooter",
        scroller: "body",
        start: "top 90%",
      }
    });

  });


  return (
    <footer>
      <div className="w-full p-16 flex gap-10 flex-col sm:flex-row items-center justify-around bg-footer-sm md:bg-footer-md lg:bg-footer-lg bg-cover bg-bottom">
        <b className="gsapFooter lg:w-1/3 xl:w-1/4 text-center text-white text-3xl sm:text-4xl">
          Sign up and Scoot up today
        </b>
        <div className="gsapScrollU flex gap-2 px-4">
          <div>
            <img src={AppStore} alt="store" />
          </div>
          <div>
            <img src={PlayStore} alt="store" />
          </div>
        </div>
      </div>
      <div className="w-full px-5 py-5 md:py-0 md:px-20 bg-gray-900 flex flex-col sm:flex-row gap-5 items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center">
          <Link to="/">
            <div className="py-5 text-3xl font-extrabold text-white">scoot</div>
          </Link>
          <ul className="sm:ml-10 flex flex-col sm:flex-row items-center text-dim-grey cursor-pointer">
            <Link to="/about" className="p-3 md:p-5 hover:text-yellow">
              About
            </Link>
            <Link to="/location" className="p-3 md:p-5 hover:text-yellow">
              Location
            </Link>
            <Link to="/careers" className="p-3 md:p-5 hover:text-yellow">
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
