import React from "react";
import cover from "../../../../assets/images/img.png";
import coverBg from "../../../../assets/images/img11.png";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero min-h-96 my-16 ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img
                    src={cover}
                    className="max-w-sm rounded-lg w-full"
                    alt="cover"
                />
                <div className="relative">
                    <div className="coverText absolute top-1/3 z-40">
                        <h1 className=" text-3xl md:text-6xl font-bold">
                            Your <span className="text-gradient ">Health</span>{" "}
                            Our Concern.
                        </h1>
                        <p className="py-6 text-gray-500">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.{" "}
                            <br /> In deleniti eaque aut repudiandae et a id
                            nisi.
                        </p>
                        <Link
                            to="/appointment"
                            className="btn bg-gradient border-none shadow-2xl"
                        >
                            Get Started
                        </Link>
                    </div>
                    <img src={coverBg} className="opacity-10 z-10" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
