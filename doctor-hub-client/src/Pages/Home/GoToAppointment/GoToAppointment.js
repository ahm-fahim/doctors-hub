import React from "react";
import img from "../../../assets/images/img10.png";
import { Link } from "react-router-dom";
import img2 from "../../../assets/images/img.png";
import img3 from "../../../assets/images/img12.png";

const GoToAppointment = () => {
    return (
        <div className="hero mt-24">
            <div className="hero-content flex-col lg:flex-row">
                <div className="relative ">
                    <div className="absolute top-24 left-16 animate-pulse">
                        <img src={img2} alt="" className="w-24" />
                        <h1 className="text-gradient text-center font-bold text-3xl">
                            Doctors <br /> Hub
                        </h1>
                    </div>
                    <img
                        src={img}
                        alt="appoint"
                        className="max-w-sm rounded-lg relative"
                    />
                </div>
                <div className="relative">
                    <div className="absolute top-1/3 z-40">
                        <h1 className=" text-3xl md:text-6xl font-bold ">
                            It is time to live{" "}
                            <span className="text-gradient">healthily</span> .
                        </h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Link
                            to="/appointment"
                            className="btn bg-gradient border-none"
                        >
                            Get Appointment
                        </Link>
                    </div>
                    <img
                        src={img3}
                        className="relative opacity-10 z-10"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default GoToAppointment;
