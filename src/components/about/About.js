import React from "react";
import PageHeading from "../PageHeading";
import InfoSection from "../home/InfoSection";
import Image1 from "../../assets/home/image4.png";
import Image2 from "../../assets/home/image5.png";
import AboutScoot from "./AboutScoot";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  const data = [
    {
      image: Image1,
      msgs: "Mobility for the Digital era",
      defination:
        "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
      buttonText: "",
      n: "1",
      btnDisplay: "hidden",
    },
    {
      image: Image2,
      msgs: "Better urban living",
      defination:
        "We're helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
      buttonText: "",
      n: "2",
      btnDisplay: "hidden",
    },
  ];
  // GSAP ANIMATION
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".gsapUp", {
      y: 100,
      duration: 1,
      opacity: 0,
    });
    gsap.from(".gsapL", {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });
  }, []);

  return (
    <>
      <PageHeading heading="About" />
      <AboutScoot />

      {/* <InfoSection
        myData = {data}
    /> */}
    </>
  );
};

export default About;
