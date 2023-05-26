import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../../SharedComponents/Modal/Modal";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";

const DoctorsDetails = ({ info }) => {
    const {
        id,
        specialty,
        description,
        image,
        name,
        education,
        experience,
        hospital,
    } = info;

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="  absolute top-0  lg:p-5 w-full h-full bg-gradient2 grid grid-cols-1 gap-5 md:mt-6 justify-items-center place-content-center  shadow-2xl rounded-xl">
            <Link
                to="#"
                onClick={openModal}
                className="btn btn-outline w-1/3 shadow-2xl "
            >
                Details
            </Link>
        
            <PrimaryButton path={`/appointment/${id}`}>Get Appoint</PrimaryButton>

            <Modal className="lg:p-16" isOpen={isOpen} onClose={closeModal}>
                <div>
                    <img src={image} alt="" className="h-40" />
                    <h1 className="text-2xl text-gradient font-bold mt-5">
                        {name}
                    </h1>
                    <h2 className="text-lg mt-3">
                        {" "}
                        <span className="font-bold">Specialty - </span>{" "}
                        {specialty}
                    </h2>
                    <h3 className="text-xs text-gradient mt-">{experience}</h3>
                    <h3 className="text-lg mt-2">
                        <span className="font-bold">Education - </span>
                        {education}
                    </h3>
                    <h4 className="text-md mt-2">
                        <span className="font-bold">Hospital - </span>
                        {hospital}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2">
                        {" "}
                        <span className="font-bold text-black">
                            Description -{" "}
                        </span>{" "}
                        {description}
                    </p>
                </div>
            </Modal>
        </div>
    );
};

export default DoctorsDetails;
