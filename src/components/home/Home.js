import React from "react";
import Hero from "./Hero";
import GuideSection from "./GuideSection";
import InfoSection from "./InfoSection";

import Image1 from "../../assets/home/image1.png";
import Image2 from "../../assets/home/image2.png";
import Image3 from "../../assets/home/image3.png";

function Home(){

    const data = [
        {
            image: Image1,
            msgs: "Easy to use riding telemetry",
            defination: "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app.",
            buttonText: "Learn More",
            n: "1",
            btnDisplay: "",
        },
        {
            image: Image2,
            msgs: "Coming to a city near you",
            defination: "Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year.",
            buttonText: "Learn More",
            n: "2",
            btnDisplay: "",
        },
        {
            image: Image3,
            msgs: "Zero hassle payments",
            defination: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
            buttonText: "Learn More",
            n: "3",
            btnDisplay: "",
        },
    ]

    return(
        <div>
            <Hero/>
            <GuideSection/>
            <InfoSection myData={data} />
        </div>
    );
}

export default Home;

