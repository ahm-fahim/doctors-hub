import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../SharedComponents/Loader/Loader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <Loader />;
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/signup" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;
