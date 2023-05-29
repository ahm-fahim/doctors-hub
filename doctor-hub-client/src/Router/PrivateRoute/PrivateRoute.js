import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return (
            <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_Zus25A5BNo.json"
                className="h-screen w-full p-16"
            ></Player>
        );
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/signup" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;
