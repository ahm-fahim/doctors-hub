import React from "react";
import Hero from "../HeroSection/Hero/Hero";
import Address from "../HeroSection/Address/Address";
import Service from "../ServiceSection/Service/Service";

const Home = () => {
    return (
        <div>
            <Hero />
            <Address />
            <Service/>
        </div>
    );
};

export default Home;
