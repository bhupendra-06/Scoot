import React from "react";
import arrow1 from "../../assest/arrow.svg";

const Hero = () => {
  return (
    <div className="w-full min-h-[calc(100vh-76px)] relative bg-dark-navy bg-blend-multiply bg-hero bg-no-repeat bg-right bg-cover">
      <div className="mx-5 pt-20 md:mx-auto lg:mx-20 md:w-[620px] lg:w-[520px] flex flex-col items-center md:items-end">
        <h1 className="my-5 text-center lg:text-start text-white text-4xl sm:text-5xl font-bold z-10">
          Scooter sharing made simple
        </h1>
        <p className="sm:mx-10 p-4 text-white text-center sm:text-justify z-10">
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you’re away!
        </p>
        <button className="mx-14 my-5 px-5 py-2  rounded-sm border-2 border-yellow bg-yellow text-white font-bold duration-200 hover:bg-transparent hover:text-yellow md:self-start z-10">
          Get Scootin
        </button>
        {/* Arrow in Background */}
        <img
          className="absolute -z-0 h-36 bottom-5 -left-2/3 md:bottom-5 md:-left-5 lg:top-1/2 lg:left-1/2"
          src={arrow1}
          alt="aroow"
        />
      </div>
    </div>
  );
};

export default Hero;
