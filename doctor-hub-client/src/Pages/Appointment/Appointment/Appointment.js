import React, { useState } from "react";
import AppointHero from "../AppointHero/AppointHero";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

const Appointment = () => {
    const { id } = useParams();
    console.log("appointment page", id);
    const [selectedDate, setSelectedDate] = useState(new Date());

    let todayDate = " Please Pick The Date ";
    if (selectedDate) {
        todayDate = (
            <span className="text-2xl ml-3">{format(selectedDate, "PP")}</span>
        );
    }
    return (
        <div>
            <AppointHero
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <AvailableAppointments todayDate={todayDate} />
        </div>
    );
};

export default Appointment;
