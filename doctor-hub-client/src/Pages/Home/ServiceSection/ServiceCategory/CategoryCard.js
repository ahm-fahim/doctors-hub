import React from "react";

const CategoryCard = ({ category }) => {
    const { specialty, description, img, cssProperty, name } = category;
    return (
        <div
            className={`min-h-full text-center grid grid-cols-1 mt-10 justify-items-center p-5 shadow-2xl rounded-xl ${
                cssProperty ? cssProperty.backgroundColor : "bg-white"
            }`}
        >
            <img src={img} className="rounded-2xl w-1/4 " alt="doctors" />
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
    );
};

export default CategoryCard;
