import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp = () => {
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
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
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
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
