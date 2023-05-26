import React, { useEffect, useState } from "react";
import AvailableAppointmentCard from "./AvailableAppointmentCard";
import Modal from "../../../SharedComponents/Modal/Modal";
import AppointForm from "../AppointForm/AppointForm";

const AvailableAppointments = ({ currentDate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [appointInfo, setAppointInfo] = useState(null);

    const appointFormInfo = (data) => {
        setAppointInfo(data);
        openModal();
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        fetch("schedule.json")
            .then((res) => res.json())
            .then((data) => {
                setSchedule(data.schedule);
            });
    }, []);

    return (
        <div className="mb-16">
            <h1 className="text-gradient font-bold flex items-center justify-center">
                Available Service On
                {currentDate}
            </h1>
            <div className="mt-10 md:grid grid-cols-3 gap-5 justify-items-center items-center">
                {schedule.map((info) => (
                    <AvailableAppointmentCard
                        key={info.id}
                        info={info}
                        appointFormInfo={appointFormInfo}
                    />
                ))}
            </div>
            {appointInfo && (
                <Modal className="lg:p-16" isOpen={isOpen} onClose={closeModal}>
                    <AppointForm currentDate={currentDate} info={appointInfo} />
                </Modal>
            )}
        </div>
    );
};

export default AvailableAppointments;
