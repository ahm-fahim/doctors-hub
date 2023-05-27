import React, {  useState } from "react";
import AvailableAppointmentCard from "./AvailableAppointmentCard";
import Modal from "../../../SharedComponents/Modal/Modal";
import AppointForm from "../AppointForm/AppointForm";

const AvailableAppointments = ({ doctorInfo, currentDate }) => {
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

    return (
        <div className="mb-16">
            <h1 className="text-gradient font-bold flex items-center justify-center">
                Available Service On
                {currentDate}
            </h1>
            <AvailableAppointmentCard
                doctorInfo={doctorInfo}
                appointFormInfo={appointFormInfo}
            />

            {appointInfo && (
                <Modal className="lg:p-16" isOpen={isOpen} onClose={closeModal}>
                    <AppointForm
                        currentDate={currentDate}
                        appointInfo={appointInfo}
                        doctorInfo={doctorInfo}
                    />
                </Modal>
            )}
        </div>
    );
};

export default AvailableAppointments;
