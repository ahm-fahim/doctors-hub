import React from "react";
import Address from "../HeroSection/Address/Address";
import Service from "../ServiceSection/Service/Service";
import HomeBanner from "../HeroSection/HomeBanner/HomeBanner";

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Address />
            <Service />
        </div>
    );
};

export default Home;
