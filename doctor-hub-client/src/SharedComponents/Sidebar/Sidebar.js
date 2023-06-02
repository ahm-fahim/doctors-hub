import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiDoctorFace } from "react-icons/gi";
const link = [
    {
        id: 1,
        to: "/dashboard/addDoctors",
        name: "Add Doctors",
        icon: <GiDoctorFace />,
    },
    {
        id: 2,
        to: "/dashboard/updateDoctors",
        name: "Update Doctors",
        icon: <AiOutlineDashboard />,
    },
];

const Sidebar = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex items-center">
            {/* Toggle Button */}
            <button
                className="block lg:hidden p-2 bg-gradient text-gray-500 hover:text-white focus:outline-none"
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
                className={`w-60 lg:w-60  h-screen ${
                    isSidebarOpen || "lg:block hidden"
                }`}
            >
                <li className="p-2 w-full hover:text-emerald-500 hover:bg-emerald-50 hover:rounded-tr-2xl">
                    <Link to="/dashboard" className="flex items-center">
                        <AiOutlineDashboard className="mr-2 text-2xl text-gray-500" />
                        Dashboard
                    </Link>
                </li>
                {link.map((item) => (
                    <li
                        key={item.id}
                        className="p-2 w-full hover:text-emerald-500 hover:bg-emerald-50"
                    >
                        <Link to={item.to} className="flex items-center">
                            <span className="mr-2 text-2xl text-gray-500">
                                {item.icon}
                            </span>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Main Content */}
            <div className="flex-grow bg-emerald-50 rounded-tl-2xl p-5 h-screen">
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
