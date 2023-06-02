import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../SharedComponents/Sidebar/Sidebar";
import Navbar from "../../SharedComponents/Navbar/Navbar";

const DashboardLayouts = () => {
    return (
        <div>
            <Navbar />

            <Sidebar>
                <Outlet />
            </Sidebar>
        </div>
    );
};

export default DashboardLayouts;
