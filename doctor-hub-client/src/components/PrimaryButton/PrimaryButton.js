import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ btnType, disabled, children, path, operation }) => {
    return (
        <Link
            disabled={`${disabled ? disabled : ""}`}
            type={`${btnType ? btnType : ""}`}
            to={`${path ? path : ""}`}
            onClick={operation}
            className="btn bg-gradient border-none shadow-2xl"
        >
            {children}
        </Link>
    );
};

export default PrimaryButton;
