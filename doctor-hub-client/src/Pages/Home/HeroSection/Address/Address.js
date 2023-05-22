import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GiAlarmClock } from "react-icons/gi";

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
                <div
                    key={info.id}
                    className="flex justify-center items-center bg-gradient shadow-2xl mt-10 rounded-xl py-5 px-4"
                >
                    <p className="text-5xl mr-3">{info.icon}</p>
                    <div>
                        <h1 className="text-xl font-bold">{info.title}</h1>
                        <p>{info.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Address;
