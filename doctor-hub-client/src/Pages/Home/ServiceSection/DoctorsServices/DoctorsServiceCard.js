import React from "react";
import "./DoctorsServiceCard.css";
import DoctorsDetails from "./DoctorsDetails";

const DoctorsServiceCard = ({ category }) => {
    const {
        specialty,
        description,
        image,
        bgClass,
        color,
        name,
    } = category;
    return (
        <div className="relative visibleDiv">
            <div
                className={`relative min-h-full text-center grid grid-cols-1 mt-6 justify-items-center p-5 shadow-2xl rounded-xl ${bgClass}`}
            >
                <img src={image} className="rounded-2xl h-36" alt="doctors" />
                <h1 className={`text-xl mt-5 font-bold   ${color}`}>
                    {specialty}
                </h1>
                <p className="text-sm text-gray-400 mb-5">{name}</p>
                <p className={`${color} `}>{description}</p>
            </div>
            <div className="hiddenDiv">
                <DoctorsDetails info={category} />
            </div>
        </div>
    );
};

export default DoctorsServiceCard;
