import React from "react";
import Icon1 from '../../assest/home/mobile.svg';
import Icon2 from '../../assest/home/riding-scooter.svg';
import Icon3 from '../../assest/home/scooter.svg';
const GuideSection = () => {
  return (
    <div className="py-10 lg:flex overflow-hidden">

      <div className="my-4 p-5 text-center sm:text-start sm:flex sm:justify-center sm:items-start sm:max-w-[750px] sm:mx-auto lg:inline-block">
        <div className="mx-auto mb-6 w-24 h-24 flex items-center justify-center bg-yellow rounded-full">
          <img alt="icon" src={Icon1} width="45px"/>
        </div>
        <div className="sm:basis-3/4">
          <h4 className="text-2xl font-bold text-dark-navy">Locate with app</h4>
          <p className="mt-6 text-dim-grey text-justify">
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.
          </p>
        </div>
      </div>
      <div className="my-4 p-5 text-center sm:text-start sm:flex sm:justify-center sm:items-start sm:max-w-[750px] sm:mx-auto lg:inline-block">
        <div className="mx-auto mb-6 w-24 h-24 flex items-center justify-center bg-yellow rounded-full">
          <img alt="icon" src={Icon2} width="45px"/>
        </div>
        <div className="sm:basis-3/4">
          <h4 className="text-2xl font-bold text-dark-navy">Pick your scooter</h4>
          <p className="mt-6 text-dim-grey text-justify">
          We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.
          </p>
        </div>
      </div>
      <div className="my-4 p-5 text-center sm:text-start sm:flex sm:justify-center sm:items-start sm:max-w-[750px] sm:mx-auto lg:inline-block">
        <div className="relative mx-auto mb-6 w-24 h-24 flex items-center justify-center bg-yellow rounded-full ">
          <img alt="icon" src={Icon3} width="45px"/>
          {/*Below is for the grey line in back of the icons */}
          <div className="hidden sm:inline absolute left-1/2 top-1/2 origin-left -rotate-90 lg:rotate-180 h-4 w-[14000px] bg-light-grey -z-50"></div>
        </div>
        <div className="sm:basis-3/4">
          <h4 className="text-2xl font-bold text-dark-navy">Enjoy the ride</h4>
          <p className="mt-6 text-dim-grey text-justify">
          Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.
          </p>
        </div>
      </div>

    </div>
  );
};

export default GuideSection;
