import React from "react";
import ServiceCategory from "../ServiceCategory/ServiceCategory";

const Service = () => {
    return (
        <div className="my-16">
            <div className="text-center my-14">
                <h1 className="text-lg font-bold text-gradient">OUR SERVICES</h1>
                <h1 className="text-2xl font-bold">Services We Provide</h1>
            </div>
            <ServiceCategory />
            
        </div>
    );
};

export default Service;
