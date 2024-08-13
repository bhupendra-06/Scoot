import React from "react";
import InfoChild from "./InfoChild";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const InfoSection = ({ myData }) => {

  //GSAP SCROLLTRIGGER ANIMATION
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#gsapInfo1", {
      x: 300,
      duration: 1,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#gsapInfo1",
        start: "0% 70%",
        end: "-70% 30%",
        toggleActions: "play none reverse none",
        // scrub: true,
      },
    });
    gsap.from("#gsapInfo2", {
      x: -300,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#gsapInfo2",
        start: "0% 70%",
        end: "-70% 30%",
        toggleActions: "play none reverse none",
      },
    });
    gsap.from("#gsapInfo3", {
      x: 300,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#gsapInfo3",
        start: "0% 70%",
        end: "-70% 30%",
        toggleActions: "play none reverse none",
      },
    });

  });



  return (
    <div className="info-section mb-4">

      <InfoChild data={myData} />
    </div>
  );
};

export default InfoSection;
