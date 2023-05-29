import React, { useContext, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState(" ");
    const [signUpError, setSignUpError] = useState(" ");
    
    const { signUpUser, updateUserProfile } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setErrorMessage("Password must be 6 characters");
        } else {
            setErrorMessage(" ");
        }

        const profile = {
            displayName: name,
        };

        signUpUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                toast.success("Successfully Sign Up");

                navigate(from, { replace: true });

                updateUserProfile(profile)
                    .then(() => {})
                    .then((error) => {});

                form.reset();
            })
            .then((error) => {
                setSignUpError(error?.message);
            });
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
                        <p className="text-red-500">{signUpError}</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                required
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
                                name="password"
                                required
                                type="text"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <p className="text-white text-xs mt-2">
                                {errorMessage}
                            </p>
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
