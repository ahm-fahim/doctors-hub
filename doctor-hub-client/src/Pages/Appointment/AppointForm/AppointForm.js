import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AppointForm = ({ doctorInfo, currentDate, appointInfo }) => {
    const { name, specialty } = doctorInfo;

    console.log("appoint Info", doctorInfo);

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form className="card-body">
                        <div>
                            <input
                                type="text"
                                value={`${name}`}
                                readOnly
                                className="outline-none  text-gradient text-xl font-bold"
                            />
                            <input
                                type="text"
                                value={`${specialty}`}
                                readOnly
                                className="outline-none text-xs font-bold text-gray-500"
                            />
                        </div>
                        <input
                            type="text"
                            value={currentDate.props.children}
                            readOnly
                            className="outline-none text-gradient font-bold form-control"
                        />

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input mt-3 input-bordered form-control"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="input input-bordered form-control"
                        />
                        <div className="flex gap-2 w-full">
                            <input
                                type="text"
                                placeholder="Male / Female"
                                className="input w-1/2 input-bordered form-control"
                            />
                            <input
                                type="text"
                                placeholder="Age"
                                className="input w-1/2 input-bordered form-control"
                            />
                        </div>
                        <textarea
                            className="textarea textarea-accent"
                            placeholder="Problem / Diseases"
                        ></textarea>

                        <div className="form-control mt-6">
                            <PrimaryButton type="submit">SUBMIT</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointForm;
