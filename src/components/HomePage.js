import React from "react";
import HeroSection from "./HeroSection";
import Feature from "./Feature";

const HomePage = () => {
    return (
        <div className="App">
            <div className="flex justify-center">
                <HeroSection/>
                <Feature/>
            </div>
        </div>
    )
}

export default HomePage