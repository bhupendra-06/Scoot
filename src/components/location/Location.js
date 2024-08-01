import React from "react";
import PageHeading from "../PageHeading";
import Map from "../../assets/locations/map.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Location = () => {
 //GSAP ANIMATION HERE
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".gsapUp",{
      y: 100,
      opacity: 0,
      duration: 1,
      // stagger: 0.2,
      // ease: "elastic.out(0.5,0.3)",
      scrollTrigger:{
        trigger: ".gsapUp",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 90%",
        toggleActions: "play none reverse none",
      }
    });

  });

  return (
    <>
      <PageHeading 
      heading="Locations" 
    />
      <div className="w-full p-14 px-2 sm:p-24">
        <img src={Map} alt="location's map" width="90%" className="mx-auto" />
      </div>
      <div className="mb-10 px-6 flex flex-col md:flex-row justify-around items-center">
        <h3 className="gsapUp md:w-1/4 my-4 text-center text-3xl font-bold">
          Your City Not Listed?
        </h3>
        <p className="gsapUp md:w-2/5 text-dim-grey text-center md:text-justify">
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <button className="gsapUp my-7 mx-auto md:mx-0 md:ml-0 px-5 py-2 rounded-sm border-2 border-yellow bg-yellow text-white font-bold duration-200 hover:bg-transparent hover:text-yellow">
          Message Us
        </button>
      </div>
    </>
  );
};

export default Location;
