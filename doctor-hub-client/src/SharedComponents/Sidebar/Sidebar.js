import React, { useState } from "react";
import { Link } from "react-router-dom";

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

const Sidebar = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            {/* Toggle Button */}
            <button
                className="block lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={toggleSidebar}
            >
                <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isSidebarOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Sidebar */}
            <ul
                className={`lg:w-64 bg-gradient h-screen ${
                    isSidebarOpen || "lg:block hidden"
                }`}
            >
                {link.map((item) => (
                    <li key={item.id}>
                        <Link to={item.to}>{item.name}</Link>
                    </li>
                ))}
            </ul>

            {/* Main Content */}
            <div className="flex-grow">{children}</div>
        </div>
    );
};

export default Sidebar;
