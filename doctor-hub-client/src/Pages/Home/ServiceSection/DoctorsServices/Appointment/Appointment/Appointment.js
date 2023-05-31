import React, { useEffect, useState } from "react";
import AppointHero from "../AppointHero/AppointHero";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";
import { format } from "date-fns";
import { useParams } from "react-router-dom";

const Appointment = () => {
    const { id } = useParams();
    const [doctorInfo, setDoctorInfo] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        fetch(`http://localhost:5000/doctors/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setDoctorInfo(data);
            });
    }, [id]);


    // current date 
    let currentDate = " Please Pick The Date ";
    if (selectedDate) {
        currentDate = (
            <span className="text-2xl ml-3">{format(selectedDate, "PP")}</span>
        );
    }
    return (
        <div>
            <AppointHero
                doctorInfo={doctorInfo}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />

            <AvailableAppointments
                doctorInfo={doctorInfo}
                currentDate={currentDate}
            />
        </div>
    );
};

export default Appointment;
