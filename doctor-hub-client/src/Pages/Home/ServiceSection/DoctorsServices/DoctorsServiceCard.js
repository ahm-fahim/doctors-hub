import React from "react";
import { Link } from "react-router-dom";
import "./DoctorsServiceCard.css";

const DoctorsServiceCard = ({ category }) => {
    const { specialty, description, image, cssProperty, name } = category;
    return (
        <div className="relative visibleDiv">
            <div
                className={`relative min-h-full text-center grid grid-cols-1 mt-6 justify-items-center p-5 shadow-2xl rounded-xl ${
                    cssProperty ? cssProperty.backgroundColor : "bg-white"
                }`}
            >
                <img src={image} className="rounded-2xl h-36" alt="doctors" />
                <h1
                    className={`text-xl mtH-5 font-bold   ${
                        cssProperty ? cssProperty.color : "text-gradient"
                    }`}
                >
                    {specialty}
                </h1>
                <p className="text-sm text-gray-400 mb-5">{name}</p>
                <p
                    className={`${
                        cssProperty ? cssProperty.color : "text-gray-700"
                    } `}
                >
                    {description}
                </p>
            </div>
            <div className="hiddenDiv">
                <div className="  absolute top-0  lg:p-5 w-full h-full bg-gradient2 grid grid-cols-1 gap-5 md:mt-6 justify-items-center place-content-center  shadow-2xl rounded-xl">
                    <Link to="" className="btn btn-outline w-1/3 shadow-2xl ">
                        Details
                    </Link>
                    <Link
                        to=""
                        className="btn border-none w-1/3 shadow-2xl bg-gradient"
                    >
                        Get Appoint
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorsServiceCard;
