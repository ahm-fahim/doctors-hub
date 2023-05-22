import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../SharedComponents/Header/Header";
import Footer from "../../SharedComponents/Footer/Footer";

const MainLayouts = () => {
    return (
        <div className="px-2 md:px-16 ">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;
