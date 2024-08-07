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
      opacity: 0,
      scrollTrigger: {
        trigger: "#gsapInfo3",
        start: "top 70%",
        start: "0% 70%",
        end: "-70% 30%",
        toggleActions: "play none reverse none",
      },
    });

  });



  return (
    <div className="guidesection mb-4">

      <InfoChild data={myData} />

      {/* <InfoChild
        image={Image1}
        msgs="Easy to use riding telemetry"
        defination="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        buttonText="Learn More"
        n="1"
      />
      <InfoChild
        image={Image2}
        msgs="Coming to a city near you"
        defination="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
        buttonText="Learn More"
        n="2"
      />
      <InfoChild
        image={Image3}
        msgs="Zero hassle payments"
        defination="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
        buttonText="Learn More"
        n="3"
      /> */}
    </div>
  );
};

export default InfoSection;
