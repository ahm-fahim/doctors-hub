import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { BiCurrentLocation } from "react-icons/bi";
import { AiOutlineBranches } from "react-icons/ai";
import waves from "../../assets/images/wave.svg";

const Footer = () => {
    const footerBg = {
        backgroundImage: `url(${waves})`,
    };
    return (
        <div
            className="bg-cover bg-no-repeat h-full md:h-96 text-white md:grid grid-cols-3 gap-5 justify-items-center items-end p-5 md:p-10"
            style={footerBg}
        >
            <div className="mt-10">
                <span className="text-xl flex items-center font-bold">
                    <AiOutlineBranches className="mr-2" /> Our Branch
                </span>
                <p className="text-gradient font-bold">Bogura, Colony.</p>
                <p className="text-gradient font-bold">Dhaka, 123-road Mirpur.</p>
                <p className="text-gradient font-bold">Rajshahi, 301-Colony.</p>
                <p className="text-gradient font-bold">Dinazpur, Ruppur-324.</p>
            </div>
            <div className="mt-10">
                <span className="text-xl flex items-center font-bold">
                    <FiPhoneCall className="mr-2" /> Call Now
                </span>
                <p className="text-gradient font-bold">+088 3341 4234 234</p>
                <p className="text-gradient font-bold">+088 9941 2234 536</p>
            </div>
            <div className="mt-10">
                <h3 className="text-xl font-bold flex items-center">
                    <BiCurrentLocation className="mr-2" />
                    OUR LOCATION
                </h3>
                <p className="font-bold text-gray-200">
                    Bogura, 123-road, Colony
                </p>
            </div>
        </div>
    );
};

export default Footer;
