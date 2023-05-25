import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AvailableAppointmentCard = ({ info }) => {
    const { day, hours } = info;

    return (
        <div className="grid grid-cols-1 justify-items-center items-center shadow-2xl w-full rounded-xl min-h-full p-3 mt-5">
            <h1 className="text-2xl text-gradient font-bold">{day}</h1>
            <div>
                {hours.map((time) => (
                    <div
                        key={time.start}
                        className="grid grid-cols-2 gap-4 my-3 text-sm text-gray-600 "
                    >
                        <p className="text-end">Start - {time.start}</p>
                        <p className="text-start">End - {time.end}</p>
                    </div>
                ))}
            </div>
            <PrimaryButton path="">Book Appointment</PrimaryButton>
        </div>
    );
};

export default AvailableAppointmentCard;
