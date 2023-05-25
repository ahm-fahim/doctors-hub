import React from "react";

const AddressCard = ({ info }) => {
    const { icon, title, description, cssProperties } = info;
    return (
        <div
            className={`lg:flex justify-center items-center shadow-2xl mt-10 rounded-xl py-5 px-4 ${
                cssProperties ? cssProperties.backgroundColor : "bg-gradient"
            } `}
        >
            <p className="text-5xl">{icon}</p>
            <div>
                <h1 className="text-xl font-bold">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AddressCard;
