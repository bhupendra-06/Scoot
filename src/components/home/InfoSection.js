import React from "react";
import InfoChild from "./InfoChild";
import Image1 from "../../assets/home/image1.png";
import Image2 from "../../assets/home/image2.png";
import Image3 from "../../assets/home/image3.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const InfoSection = () => {
  //GSAP SCROLLTRIGGER ANIMATION
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#gsapInfo1", {
      x: 300,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#gsapInfo1",
        start: "top 90%",
        end: "top 10%",
        scrub: 5,
      },
    });
    gsap.from("#gsapInfo2", {
      x: -300,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#gsapInfo2",
        start: "top 80%",
        end: "top 10%",
        scrub: 5,
      },
    });
    gsap.from("#gsapInfo3", {
      x: 300,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#gsapInfo3",
        start: "top 80%",
        end: "top 10%",
        scrub: 2,
      },
    });
    gsap.from(".gsapText", {
      x: -200,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".gsapText",
        // markers: true,
        start: "top 60%",
        end: "top 30%",
        // scrub: 5,
      },
    });
  });
  return (
    <div className="guidesection mb-4">
      <InfoChild
        image={Image1}
        msgs="Easy to use riding telemetry"
        defination="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
        n="1"
      />
      <InfoChild
        image={Image2}
        msgs="Coming to a city near you"
        defination="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
        n="2"
      />
      <InfoChild
        image={Image3}
        msgs="Zero hassle payments"
        defination="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
        n="3"
      />
    </div>
  );
};

export default InfoSection;
