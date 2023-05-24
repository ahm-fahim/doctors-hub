import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const DoctorsDetails = ({ info }) => {
    const {
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
            <Link
                to=""
                className="btn border-none w-1/3 shadow-2xl bg-gradient"
            >
                Get Appoint
            </Link>

            <Modal className="lg:p-10" isOpen={isOpen} onClose={closeModal}>
                <img src={image} alt="" className="h-40" />
                <h1 className="text-2xl text-gradient font-bold mt-5">{name}</h1>
                <h2 className="text-xl font-bold mt-3">
                    {" "}
                    <span className="font-bold">Specialty - </span> {specialty}
                </h2>
                <h3 className="text-lg font-bold text-gray-500 mt-5">
                    <span className="font-bold">Education - </span>
                    {education}
                </h3>
                <h3 className="text-md text-gray-500 mt-5">{experience}</h3>
                <h4 className="text-md mt-5">
                    <span className="font-bold">Hospital - </span>
                    {hospital}
                </h4>
                <p className="text-sm text-gray-500 mt-5">
                    {" "}
                    <span className="font-bold">Description - </span>{" "}
                    {description}
                </p>
            </Modal>
        </div>
    );
};

export default DoctorsDetails;
