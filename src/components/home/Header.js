import React from "react";
import BurgerIcon from "./BurgerIcon";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Header = () => {

  // GSAP TIMELINE IN HEADER ELEMENTS
 
  useGSAP(()=> {
    const tl1 = gsap.timeline();

    tl1.from(".gsapLogo",{
    y: -20,
    opacity: 0,
    duration: 0.8,
    // scale: 0.5,
    delay: 0,
    });
    gsap.from(".gsapNav",{
    y: -20,
    opacity: 0,
    duration: 0.3,
    stagger: 0.1,
    delay: 0.3,
    })
    gsap.from(".gsapBtn", {
      x: 300,
      ease: "elastic.out(1,0.3)",
      duration: 3,
    });

    // GSAP FOR MOBILE SCREEN NAVBAR
    const tl = gsap.timeline();
    tl.to(".navbar", {
      // x: -350,
      width: "70%",
      duration: 0.2,
    });
    tl.from(".Nav", {
      x: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    });
    tl.pause();

    const burger = document.getElementById("burger");
    // const cross = document.getElementById("cross");
    burger.addEventListener("click",()=>{
      tl.play();
    });
    // cross.addEventListener("click",()=>{
    //   tl.reverse();
    // });
    // TO HIDE THE MENU WHEN CLICKING ITS ELEMENTS
    const nav = document.querySelectorAll(".Nav");
    nav.forEach((nv)=>{
      nv.addEventListener("click",()=>{
        tl.reverse();
      });
    });
    const navbar = document.querySelector(".navbar");
    navbar.addEventListener("click",()=>{
      tl.pause();
    });
    const body = document.querySelector("body");
    body.addEventListener("click",()=>{
      if(navbar.style.width === "70%"){
        tl.reverse();
      }
    });
    

  })
  return (
    <div className="w-full px-20 flex items-center justify-center md:justify-between">
      <div className="flex">
        <Link to="/"><div className="gsapLogo p-5 text-3xl font-extrabold text-black-navy">scoot</div></Link>
        <ul className="ml-10 hidden md:flex items-center text-dim-grey">
          <Link to="/about" className="gsapNav p-5 hover:text-yellow focus:text-yellow">About</Link>
          <Link to="/location" className="gsapNav p-5 hover:text-yellow focus:text-yellow">Location</Link>
          <Link to="/careers" className="gsapNav p-5 hover:text-yellow focus:text-yellow">Careers</Link>
          <Link to="/contact" className="gsapNav p-5 hover:text-yellow focus:text-yellow">Contact</Link>
        </ul>
      </div>
      <Link to="/">
         <button className="gsapBtn hidden md:inline ml-2 px-5 py-2  rounded-sm border-2 border-yellow bg-yellow text-white font-bold duration-200 hover:bg-transparent hover:text-yellow">
            Get Scootin
          </button>
      </Link>
      {/* HamBurger icon */}
      <div id="burger" className="absolute my-auto left-2 md:hidden">
        <BurgerIcon />
      </div>


        {/* NAVBAR MENU IN SMALL SCREEN */}
      <nav className="navbar css">
        <Link to="/" className="Nav py-4 px-10 text-3xl hover:text-yellow hover hover:bg-gray-500 focus:text-yellow ease-in">Home</Link>
        <Link to="/about" className="Nav py-4 px-10 text-3xl hover:text-yellow hover hover:bg-gray-500 focus:text-yellow ease-in">About</Link>
        <Link to="/location" className="Nav py-4 px-10 text-3xl hover:text-yellow hover hover:bg-gray-500 focus:text-yellow ease-in">Location</Link>
        <Link to="/careers" className="Nav py-4 px-10 text-3xl hover:text-yellow hover hover:bg-gray-500 focus:text-yellow ease-in">Careers</Link>
        <Link to="/contact" className="Nav py-4 px-10 text-3xl hover:text-yellow hover hover:bg-gray-500 focus:text-yellow ease-in">Contact</Link>
        {/* <div id="cross" className="m-4 absolute top-0">
        <BurgerIcon/>
        </div> */}
      </nav>
    </div>
  );
};
