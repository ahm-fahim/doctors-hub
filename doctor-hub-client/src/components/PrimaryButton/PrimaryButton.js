import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({btnType, children, path,operation }) => {
    return (
        <Link
            type={btnType}
            to={`${path}`}
            onClick={operation}
            className="btn bg-gradient border-none shadow-2xl"
        >
            {children}
        </Link>
    );
};

export default PrimaryButton;
