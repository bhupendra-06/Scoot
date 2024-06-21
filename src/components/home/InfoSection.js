import React from "react";
import InfoChild from "./InfoChild";

const InfoSection = () => {
  return (
    <div className="mb-4">
    <InfoChild btnText="Learn More" mainInfo="Easy to use riding telemetry" />
    <InfoChild btnText="Visit me" mainInfo="Visit me to use riding essentials" />
    <InfoChild btnText="Click me" mainInfo="Click me to find best scooty in rent" />

    </div>
  );
};

export default InfoSection;