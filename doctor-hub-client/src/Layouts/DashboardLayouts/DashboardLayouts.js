import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../SharedComponents/Sidebar/Sidebar";

const DashboardLayouts = () => {
    return (
        <div className="flex flex-row gap-4">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default DashboardLayouts;
