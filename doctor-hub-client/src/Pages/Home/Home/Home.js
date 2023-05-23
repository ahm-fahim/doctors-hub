import React from "react";
import Hero from "../HeroSection/Hero/Hero";
import Address from "../HeroSection/Address/Address";
import Service from "../ServiceSection/Service/Service";
import GoToAppointment from "../GoToAppointment/GoToAppointment";

const Home = () => {
    return (
        <div>
            <Hero />
            <Address />
            <Service />
            <GoToAppointment />
        </div>
    );
};

export default Home;
