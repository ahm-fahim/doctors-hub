import React from "react";
import cover from "../../../../assets/images/img.png";

const Hero = () => {
    return (
        <div className="hero min-h-96 my-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={cover}
                    className="max-w-sm rounded-lg w-full"
                    alt="cover"
                />
                <div>
                    <h1 className=" text-3xl md:text-6xl font-bold">
                        Your{" "}
                        <span className="text-gradient ">
                            Health
                        </span>{" "}
                        Our Concern.
                    </h1>
                    <p className="py-6 text-gray-500">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. <br /> In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn bg-gradient border-none shadow-2xl">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
