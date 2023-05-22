import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineManageAccounts } from "react-icons/md";
import "./Header.css";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li className="hover:text-emerald-500 mt-4">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-emerald-500 mt-4">
                            <Link to="/">About 3</Link>
                        </li>
                        <li className="hover:text-emerald-500 mt-4">
                            <Link to="/">Appointment</Link>
                        </li>
                        <li className="hover:text-emerald-500 mt-4">
                            <Link to="/">Review</Link>
                        </li>
                        <li className="hover:text-emerald-500 mt-4">
                            <Link to="/">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <Link className="normal-case text-xl">
                    <span className="text-3xl font-bold text-gradient ">
                        Doctors Hub
                    </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1">
                    <li className="px-2 hover:text-emerald-500">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2 hover:text-emerald-500">
                        <Link to="/">About</Link>
                    </li>
                    <li className="px-2 hover:text-emerald-500">
                        <Link to="/">Appointment</Link>
                    </li>
                    <li className="px-2 hover:text-emerald-500">
                        <Link to="/">Review</Link>
                    </li>
                    <li className="px-2 hover:text-emerald-500">
                        <Link to="/">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/">Login</Link>
                <MdOutlineManageAccounts className=" ml-3 text-4xl font-bold text-gradient" />
            </div>
        </div>
    );
};

export default Header;
