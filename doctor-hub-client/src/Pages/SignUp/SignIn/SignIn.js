import React, { useContext } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                toast.success("Successfully Sign In");
                navigate(from, { replace: true });
            })
            .then((error) => {
                toast.error(error);
            });
    };

    return (
        <div className="hero my-16">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient">
                    <div className="flex justify-between">
                        <Link
                            to="/signup"
                            className="bg-base-100 font-bold text-md w-full  text-center py-2"
                        >
                            <span className="text-xs text-gray-500">
                                Don't Have Any Account?
                            </span>{" "}
                            <br />
                            Sign Up
                        </Link>
                        <Link
                            to="/signIn"
                            className="font-bold text-2xl w-full text-center py-2  flex items-center justify-center"
                        >
                            <AiOutlineLogin className="text-white rotate-180" />
                            Sign In
                        </Link>
                    </div>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="text"
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
                            <button className="btn bg-gradient border-none shadow-2xl">
                                Sign Ip
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
