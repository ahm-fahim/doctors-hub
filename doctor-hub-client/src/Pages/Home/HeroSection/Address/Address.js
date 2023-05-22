import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GiAlarmClock } from "react-icons/gi";
import AddressCard from "./AddressCard";

const locationData = [
    {
        id: 1,
        icon: <GiAlarmClock />,
        title: "Opening Hours",
        description: "Everyday 9am to 11pm our services and doctors available ",
    },
    {
        id: 2,
        icon: <MdLocationPin />,
        title: "Visit Our Location",
        description: "Bogura, 123-road, Colony",
        cssProperties: {
            backgroundColor: "bg-gray-700",
        },
    },
    {
        id: 3,
        icon: <FiPhoneCall />,
        title: "Opening Hours",
        description: "+088 5345 23543 243",
    },
];

const Address = () => {
    return (
        <div className="md:grid grid-cols-3 gap-12 mt-16 mb-16 text-white">
            {locationData.map((info) => (
               <AddressCard key={info.id} info={info}/>
            ))}
        </div>
    );
};

export default Address;
