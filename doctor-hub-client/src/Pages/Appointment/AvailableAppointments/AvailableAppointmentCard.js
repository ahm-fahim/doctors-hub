import React, { useState } from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import Modal from "../../../SharedComponents/Modal/Modal";
import AppointForm from "../AppointForm/AppointForm";

const AvailableAppointmentCard = ({ info, currentDate }) => {
    const { day, hours } = info;
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
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
            <PrimaryButton operation={openModal} path="">
                Book Appointment
            </PrimaryButton>

            <Modal className="lg:p-16" isOpen={isOpen} onClose={closeModal}>
                <AppointForm currentDate={currentDate} info={info} />
            </Modal>
        </div>
    );
};

export default AvailableAppointmentCard;
