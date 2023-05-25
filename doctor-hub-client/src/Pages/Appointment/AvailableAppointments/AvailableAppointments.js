import React, { useEffect, useState } from "react";
import AvailableAppointmentCard from "./AvailableAppointmentCard";

const AvailableAppointments = ({ todayDate }) => {
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        fetch("schedule.json")
            .then((res) => res.json())
            .then((data) => {
                setSchedule(data.schedule);
                console.log(data.schedule);
            });
    }, []);
    return (
        <div className="mb-16">
            <h1 className="text-gradient font-bold flex items-center justify-center">
                Available Service On
                {todayDate}
            </h1>
            <div className="mt-10 md:grid grid-cols-3 gap-5 justify-items-center items-center">
                {schedule.map((info) => (
                    <AvailableAppointmentCard key={info.id} info={info} />
                ))}
            </div>
        </div>
    );
};

export default AvailableAppointments;
