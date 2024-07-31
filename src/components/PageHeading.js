import React from "react";

const PageHeading = ({heading}) => {
  return (
    <div className={`flex justify-between items-center bg-about-sm md:bg-about-md bg-cover bg-top`}>
      <h1 className="w-full p-14 px-2 sm:px-36 text-center sm:text-start text-5xl text-white font-bold">{heading}</h1>
      {/* White Circles at right side */}
      <div className="hidden md:flex gap-3">
        <div className="w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="w-6 h-12 border-2 border-white rounded-l-full bg-white"></div>
      </div>
    </div>
  );
};

export default PageHeading;
