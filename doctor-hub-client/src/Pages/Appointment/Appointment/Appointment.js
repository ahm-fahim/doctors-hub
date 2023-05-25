import React, { useState } from "react";
import AppointHero from "../AppointHero/AppointHero";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";
import { format } from "date-fns";

const Appointment = () => {
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
