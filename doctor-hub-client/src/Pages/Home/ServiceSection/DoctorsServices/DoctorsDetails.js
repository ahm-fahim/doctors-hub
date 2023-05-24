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

            <Modal className="lg:p-16" isOpen={isOpen} onClose={closeModal}>
                <div className="flex justify-between flex-row-reverse items-start">
                    <button
                        className="text-center text-gray-600 hover:text-gray-800"
                        onClick={closeModal}
                    >
                        <svg
                            className="w-12 h-12 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 11.414l4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95L.636 16.364l4.95-4.95L.636 6.464 1.414 5.05l4.95 4.95L11.364 5.05l.778 1.414-4.95 4.95z"
                            />
                        </svg>
                    </button>
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
                        <h3 className="text-xs text-gradient mt-">
                            {experience}
                        </h3>
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
                </div>
            </Modal>
        </div>
    );
};

export default DoctorsDetails;
