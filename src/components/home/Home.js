import React from "react";
import { Header } from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import GuideSection from "./GuideSection";

function Home(){
    return(
        <div>
            <Header/>
            <Hero/>
            <GuideSection/>
            <Footer/>
        </div>
    );
}

export default Home;
