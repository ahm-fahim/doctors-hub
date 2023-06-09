import React, { useContext } from "react";
import AppointHero from "../AppointHero/AppointHero";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import { DateContext } from "../../../../../../context/DateProvider/DateProvider";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../../../SharedComponents/Loader/Loader";

const Appointment = () => {
    const { id } = useParams();
    const { selectedDate, dateSelection } = useContext(DateContext);

    const date = format(selectedDate, "PP");

    //CURRENT DATE
    let currentDate = " Please Pick The Date ";
    if (selectedDate) {
        currentDate = (
            <span className="text-2xl ml-3">{format(selectedDate, "PP")}</span>
        );
    }

    const { data: doctorInfo = [], isLoading, refetch } = useQuery({
        queryKey: ["doctors", id, date],
        queryFn: () =>
            fetch(`http://localhost:5000/doctors/${id}?date=${date}`).then(
                (res) => res.json()
            ),
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            <AppointHero
                doctorInfo={doctorInfo}
                selectedDate={selectedDate}
                setSelectedDate={dateSelection}
            />

            <AvailableAppointments
                refetch={refetch}
                doctorInfo={doctorInfo}
                currentDate={currentDate}
            />
        </div>
    );
};

export default Appointment;
