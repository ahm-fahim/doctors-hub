import React from "react";

const AppointForm = ({ closeModal, doctorInfo, currentDate, appointInfo }) => {
    const { _id, name, specialty } = doctorInfo;

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const doctor = form.doctor.value;
        const doctorSpecialty = form.doctorSpecialty.value;
        const date = form.date.value;
        const schedule = form.schedule.value;
        const patient = form.patient.value;
        const phone = form.phone.value;
        const gender = form.gender.value;
        const age = form.age.value;
        const message = form.message.value;

        const formInfo = {
            doctorId: _id,
            doctor,
            doctorSpecialty,
            appointDate: date,
            schedule,
            patient,
            phone,
            gender,
            age,
            message,
        };

        fetch(`http://localhost:5000/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    alert("Booked Successfully!");
                    form.reset();
                    closeModal();
                }
            });

        console.log(formInfo);
    };

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleBooking} className="card-body">
                        <input
                            type="text"
                            name="doctor"
                            value={`${name}`}
                            readOnly
                            className="outline-none  text-gradient text-xl font-bold"
                        />
                        <input
                            type="text"
                            name="doctorSpecialty"
                            value={`${specialty}`}
                            readOnly
                            className="outline-none text-xs font-bold text-gray-500"
                        />
                        <input
                            type="text"
                            name="date"
                            value={currentDate.props.children}
                            readOnly
                            className="outline-none text-gradient font-bold form-control"
                        />
                        <select
                            name="schedule"
                            className="select select-accent w-full max-w-xs"
                        >
                            {appointInfo.map((schedule, index) => (
                                <option
                                    className="text-gradient"
                                    key={index}
                                    value={schedule}
                                >
                                    {schedule}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            name="patient"
                            placeholder="Full Name"
                            className="input input-bordered form-control"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className="input input-bordered form-control"
                        />
                        <div className="flex gap-2 w-full">
                            <select
                                name="gender"
                                className="select select-accent w-1/2 max-w-xs"
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                            <input
                                type="text"
                                name="age"
                                placeholder="Age"
                                className="input w-1/2 input-bordered form-control"
                            />
                        </div>
                        <textarea
                            name="message"
                            className="textarea textarea-accent"
                            placeholder="Problem / Diseases"
                        ></textarea>

                        <div className="form-control mt-6">
                            <button
                                className="btn border-none bg-gradient"
                                type="submit"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointForm;
