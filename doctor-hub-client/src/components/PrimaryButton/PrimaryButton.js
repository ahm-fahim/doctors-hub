import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ children, path,operation }) => {
    return (
        <Link
            to={`${path}`}
            onClick={operation}
            className="btn bg-gradient border-none shadow-2xl"
        >
            {children}
        </Link>
    );
};

export default PrimaryButton;
