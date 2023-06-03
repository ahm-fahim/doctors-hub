import React, { useContext, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const SignUp = () => {
    const { signUpUser, user, errorMessage } = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleSignUp = async (event) => {
        event.preventDefault();
        signUpUser(userName, phoneNumber, password);
        if (!errorMessage) {
            toast.success("Successfully Sign Up");
            navigate(from, { replace: true });
        } else {
            toast.error(errorMessage);
        }
    };

    return (
        <div className="hero my-16">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient">
                    <div className="flex justify-between">
                        <Link
                            to="/signup"
                            className="font-bold flex items-center justify-center text-2xl w-full py-2 "
                        >
                            Sign Up
                            <AiOutlineLogin className="text-white" />
                        </Link>
                        <Link
                            to="/signIn"
                            className="bg-base-100 font-bold text-md  w-full  text-center py-2"
                        >
                            <span className="text-xs text-gray-500">
                                Already Have An Account?
                            </span>{" "}
                            <br />
                            Sign In
                        </Link>
                    </div>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                required
                                type="text"
                                onChange={(e) => setUserName(e.target.value)}
                                name="userName"
                                placeholder="user name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                required
                                type="text"
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                name="phoneNumber"
                                placeholder="phone (same number of appoint)"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                required
                                type="text"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password"
                                className="input input-bordered"
                            />

                            <label className="label">
                                <Link
                                    to=""
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn bg-gradient border-none shadow-2xl"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
