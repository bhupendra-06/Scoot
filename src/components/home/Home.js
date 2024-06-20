import React from "react";
import  Header  from "./Header";
import Hero from "./Hero";
import GuideSection from "./GuideSection";
import Footer from "./Footer";
import InfoSection from "./InfoSection";

function Home(){
    return(
        <div>
            {/* <Header/> */}
            <Hero/>
            <GuideSection/>
            <InfoSection/>
            <Footer/>
        </div>
    );
}

export default Home;
