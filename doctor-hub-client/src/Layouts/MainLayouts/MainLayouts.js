import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../SharedComponents/Footer/Footer";
import Navbar from "../../SharedComponents/Navbar/Navbar";

const MainLayouts = () => {
    return (
        <div className="px-2 md:px-16 ">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;
