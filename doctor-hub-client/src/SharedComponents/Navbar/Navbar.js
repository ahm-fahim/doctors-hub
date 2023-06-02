import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const menuItem = (
        <>
            <li className="text-hover mt-5 lg:mt-0 px-2">
                <Link to="/">Home</Link>
            </li>
            <li className="text-hover mt-5 lg:mt-0 px-2">
                <Link to="/">Serials Go</Link>
            </li>
            <li className="text-hover mt-5 lg:mt-0 px-2">
                <Link to="/">About </Link>
            </li>
            <li className="text-hover mt-5 lg:mt-0 px-2">
                <Link to="/">Review</Link>
            </li>
            <li className="text-hover mt-5 lg:mt-0 px-2">
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </>
    );
    return (
        <div className="navbar bg-base-100 mt-5">
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
                        {menuItem}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl">
                    <span className="text-3xl font-bold text-gradient ">
                        Doctors Hub
                    </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1">{menuItem}</ul>
            </div>
            <div className="navbar-end">
                {user?.uid ? (
                    <Link
                        onClick={() => signOutUser()}
                        className="text-gradient"
                    >
                        Sign Out
                    </Link>
                ) : (
                    <Link to="/signup" className="text-gradient">
                        Sign Up
                    </Link>
                )}

                <div className="dropdown dropdown-end">
                    <MdOutlineManageAccounts
                        tabIndex={0}
                        className=" ml-3 text-4xl font-bold text-gradient"
                    />
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <h3 className="text-gradient">
                                {user?.uid ? (
                                    user.displayName
                                ) : (
                                    <Link
                                        to="/signIn"
                                        className="text-gradient"
                                    >
                                        Sign In
                                    </Link>
                                )}
                            </h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
