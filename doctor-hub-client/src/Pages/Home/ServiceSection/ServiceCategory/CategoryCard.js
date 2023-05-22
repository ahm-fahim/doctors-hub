import React from "react";

const CategoryCard = ({ category }) => {
    const { specialty, description, img } = category;
    return (
        <div className="min-h-full text-center grid grid-cols-1 mt-10 justify-items-center p-5 shadow-2xl rounded-xl">
            <img src={img} className="rounded-2xl w-1/4 " alt="doctors" />
            <h1 className="text-xl my-5 font-bold text-gradient">{specialty}</h1>
            <p className="text-gray-500">{description}</p>
        </div>
    );
};

export default CategoryCard;
