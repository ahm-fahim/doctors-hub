import React from "react";
import ServiceCategory from "../ServiceCategory/ServiceCategory";

const Service = () => {
    return (
        <div className="mt-16 mb-16">
            <div className="text-center mt-16 mb-16">
                <h1 className="text-lg font-bold text-gradient">OUR SERVICES</h1>
                <h1 className="text-2xl font-bold">Services We Provide</h1>
            </div>
            <ServiceCategory />
            
        </div>
    );
};

export default Service;
