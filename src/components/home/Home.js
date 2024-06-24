import React from "react";
import Hero from "./Hero";
import GuideSection from "./GuideSection";
import InfoSection from "./InfoSection";

function Home(){
    return(
        <div>
            <Hero/>
            <GuideSection/>
            <InfoSection/>
        </div>
    );
}

export default Home;
