import React from "react";
import Address from "../HeroSection/Address/Address";
import Service from "../ServiceSection/Service/Service";
import GoToAppointment from "../GoToAppointment/GoToAppointment";
import HomeBanner from "../HeroSection/HomeBanner/HomeBanner";

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Address />
            <Service />
            <GoToAppointment />
        </div>
    );
};

export default Home;
