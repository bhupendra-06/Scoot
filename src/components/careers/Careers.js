import React from "react";
import PageHeading from "../PageHeading";
import InfoSection from "../home/InfoSection";

import Image1 from "../../assets/home/image6.png";

const Careers = () => {

  const data = [
    {
        image: Image1,
        msgs: "Care to join our mission?",
        defination: "We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!",
        buttonText: "Say Hello",
        n: "1",
        btnDisplay: "",
    }
]

  return (
    <>

    <PageHeading 
      heading="Careers" 
    />
    
    <InfoSection
        myData = {data}
    />

      
    </>
  );
};

export default Careers;
