import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const link = [
        {
            id: 1,
            to: "/dashboard",
            name: "Dashboard",
        },
        {
            id: 2,
            to: "/dashboard/addDoctors",
            name: "Add Doctors",
        },
        {
            id: 3,
            to: "/dashboard/updateDoctors",
            name: "Update Doctors",
        },
    ];
    return (
        <div className="flex flex-col h-screen bg-gradient">
            <Link to="/" className="text-2xl font-bold text-white p-2">
                Doctors Hub
            </Link>
            {link.map((info) => (
                <Link
                    className="hover:bg-white p-2"
                    key={info.id}
                    to={`${info.to}`}
                >
                    {info.name}
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
