import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AppointForm = ({ currentDate, info }) => {
    const { day, hours } = info;
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <div className="card-body">
                        <input
                            type="text"
                            value={currentDate.props.children}
                            readOnly
                            className="outline-none text-gradient font-bold form-control"
                        />
                        <input
                            type="text"
                            value={`${day}, ${hours[0].start} - ${hours[0].end}`}
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
                        <input
                            type="text"
                            placeholder="Email"
                            className="input input-bordered form-control"
                        />

                        <div className="form-control mt-6">
                            <PrimaryButton>SUBMIT</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointForm;
