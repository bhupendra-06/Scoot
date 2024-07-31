import React, { useRef } from "react";
import Icon1 from "../../assets/home/mobile.svg";
import Icon2 from "../../assets/home/riding-scooter.svg";
import Icon3 from "../../assets/home/scooter.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const GuideSection = () => {

  //GSAP SCROLLTRIGGER ANIMATION

  const gsapGuide = useRef(null);
  useGSAP(()=>{

    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".gsapSection", {
      y: 200,
      duration: 1,
      opacity: 0,
      // zIndex: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".gsapSection",
        scroller: "body",
        // markers: true,
        start: "-10% 80%",
        end: "-150% 50%",
        toggleActions: "play none reverse none",
      }
    });
    gsap.to(".gsapLine", {
      // zIndex: -100,
    });
    

  },[]);
  
  return (
    <div className="body py-10 lg:px-20 lg:flex overflow-hidden">
      <div className="gsapSection my-4 p-5 text-center sm:text-start sm:flex sm:justify-center sm:items-start sm:max-w-[750px] sm:mx-auto lg:inline-block z-50">
        <div className="mx-auto mb-6 w-24 h-24 flex items-center justify-center bg-yellow rounded-full">
          <img alt="icon" src={Icon1} width="45px" />
        </div>
        <div className="sm:basis-3/4">
          <h4 className="text-xl font-bold text-black-navy">Locate with app</h4>
          <p className="mt-6 text-dim-grey text-justify">
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.
          </p>
        </div>
      </div>
      <div className="gsapSection my-4 p-5 text-center sm:text-start sm:flex sm:justify-center sm:items-start sm:max-w-[750px] sm:mx-auto lg:inline-block z-50">
        <div className="mx-auto mb-6 w-24 h-24 flex items-center justify-center bg-yellow rounded-full">
          <img alt="icon" src={Icon2} width="45px" />
        </div>
        <div className="sm:basis-3/4">
          <h4 className="text-xl font-bold text-black-navy">
            Pick your scooter
          </h4>
          <p className="mt-6 text-dim-grey text-justify">
            We show the most important info for the scooters closest to you. So
            you know how much charge they have left and can see roughly how much
            it will cost.
          </p>
        </div>
      </div>
      <div className="gsapSection my-4 p-5 text-center sm:text-start sm:flex sm:justify-center sm:items-start sm:max-w-[750px] sm:mx-auto lg:inline-block -z-50">
        <div className="relative mx-auto mb-6 w-24 h-24 flex items-center justify-center bg-yellow rounded-full ">
          <img alt="icon" src={Icon3} width="45px" />
          {/*Below is for the Grey line behind the icons */}
          <div className="gsapLine hidden sm:inline absolute left-1/2 top-1/2 origin-left -rotate-90 lg:rotate-180 h-4 w-[14000px] bg-light-grey -z-10"></div>
        </div>
        <div className="sm:basis-3/4">
          <h4 className="text-xl font-bold text-black-navy">Enjoy the ride</h4>
          <p className="mt-6 text-dim-grey text-justify">
            Scan the QR code and the bike will unlock. Retract the cable lock,
            put on a helmet, and you’re off! Always lock bikes away from
            walkways and accessibility ramps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuideSection;
