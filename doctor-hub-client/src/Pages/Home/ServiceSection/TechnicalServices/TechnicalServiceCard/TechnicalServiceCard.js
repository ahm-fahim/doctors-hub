import React from "react";

const TechnicalServiceCard = ({ info }) => {
    const { name, price } = info;
    return (
        <div className="shadow-xl w-full text-center py-4 rounded-xl mt-5 text-hover2">
            <h1 className="text-gray-800 font-bold">{name}</h1>
            <p className="">
                {" "}
                <span className="font-bold">Price</span> - ${price}{" "}
            </p>
        </div>
    );
};

export default TechnicalServiceCard;
