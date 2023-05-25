import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ children, path }) => {
    return (
        <Link to={`${path}`} className="btn bg-gradient border-none shadow-2xl">
            {children}
        </Link>
    );
};

export default PrimaryButton;
