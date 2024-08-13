import React from "react";
import arrow1 from "../../assets/arrow.svg";

const InfoChild = ({data}) => {
  return (
    <>

      {data.map((allData) => (
        <div id={`gsapInfo${allData.n}`} className="my-6 px-5 flex flex-col-reverse justify-center content-center md:my-16 md:px-20 md:flex-row md:gap-5 md:even:flex-row-reverse md:justify-between lg:px-24">
        <div className="flex flex-col justify-center md:w-1/2 lg:w-2/5">
          <h3 className="my-4 text-center md:text-start text-2xl font-bold ">
            {allData.msgs}
          </h3>
          <p className="text-dim-grey text-center md:text-justify">
            {allData.defination}
          </p>
          <button className={`${allData.btnDisplay} my-7 mx-auto md:ml-0 px-5 py-2 rounded-sm border-2 border-yellow bg-yellow text-white font-bold duration-200 hover:bg-transparent hover:text-yellow`}>
            {allData.buttonText}
          </button>
        </div>
        <div className="relative mb-4 grid place-items-center md:m-0 md:w-5/12 lg:w-1/3">
          <img 
            src={allData.image}
            alt="info showing"
            className="mx-auto sm:w-8/12 md:w-full rounded-full"
          />
          {/* ARROW */}
          <img
            className="absolute -z-0 h-36 bottom-5 -left-2/3 md:bottom-5 md:-left-5 lg:top-1/2 lg:left-1/2"
            src={arrow1}
            alt="aroow"
          />
        </div>
      </div>
      ))}
    </>  
  );
};

export default InfoChild;
