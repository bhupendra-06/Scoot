import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const data = [
  {
    role: "General Manager",
    location: "Mumbai, India",
  },
  {
    role: "UI/UX Designer",
    location: "Indore, India",
  },
  {
    role: "Blog Content Copywriter",
    location: "New York, United States",
  },
  {
    role: "Graphic Designer",
    location: "New York, United States",
  },
  {
    role: "UX Analyst",
    location: "London, United Kingdom",
  },
  {
    role: "Fleet Supervisor",
    location: "Bangalore, India",
  },
];

// MAIN COMPONENT HERE
const OpenJobPositions = () => {

// GSAP ANIMATION
useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".jobs",
          start: "20% 90%",
          end: "20% 10%",
        },
      });
    
      tl.from(".gsapJob", {
        x: -300,
        duration: 1,
        delay: 0.2,
        opacity: 0,
        stagger: 0.2,
      });
});
  return (
    <>
      <ul className="jobs mx-auto p-4 sm:p-6 w-full max-w-[1200px] md:w-10/12">
        {data.map((datum) => {
          return <OpenJob datum={datum} />;
        })}
      </ul>
    </>
  );
};

export default OpenJobPositions;

const OpenJob = ({ datum }) => {
  return (
    <li className="gsapJob my-2 p-2 sm:p-3 w-full flex items-center justify-between bg-gray-100">
      <div className="mx-2 sm:mx-4 ">
        <h3 className="sm:text-xl text-gray-600 font-bold">
          {datum.role || "Role"}
        </h3>
        <h4 className="text-gray-600 text-sm">
          {datum.location || "location"}
        </h4>
      </div>
      <button className="m-2 px-5 sm:px-10 py-2 rounded-sm border-2 border-yellow bg-yellow text-white text-sm md:text-lg font-bold duration-200 hover:bg-transparent hover:text-yellow">
        Apply
      </button>
    </li>
  );
};
