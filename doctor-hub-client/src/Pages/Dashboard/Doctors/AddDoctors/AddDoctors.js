import React from "react";
import PrimaryButton from "../../../../components/PrimaryButton/PrimaryButton";

const AddDoctors = () => {

    const handleAddDoctor = (e) => {
        e.preventDefault();
        console.log("ADD DOCTOR")
    }
    return (
        <div className="p-5 w-full">
            <h1 className="text-gradient font-bold text-3xl">Add Doctor</h1>

            <form onSubmit={handleAddDoctor} className="mt-10">
                <div className="md:grid gap-10 grid-cols-2">
                    <div className="form-control">
                        <h3 className="text-xl mb-5">Doctors Bio</h3>
                        <input
                            type="text"
                            className="input input-bordered m-2"
                            placeholder="Name"
                            name="name"
                            id=""
                        />
                        <input
                            type="text"
                            className="input input-bordered m-2"
                            placeholder="Specialty"
                            name="specialty"
                            id=""
                        />
                        <input
                            type="text"
                            className="input input-bordered m-2"
                            placeholder="Education"
                            name="education"
                            id=""
                        />
                        <input
                            type="text"
                            className="input input-bordered m-2"
                            placeholder="Experience"
                            name="experience"
                            id=""
                        />
                        <input
                            type="text"
                            className="input input-bordered m-2"
                            placeholder="Hospital"
                            name="hospital"
                            id=""
                        />
                        <textarea
                            name="hospital"
                            className="textarea textarea-bordered m-2"
                            placeholder="About"
                        ></textarea>
                        <input
                            type="file"
                            className="input  m-2"
                            name="image"
                            id=""
                        />
                    </div>
                    <div className="form-control ">
                        <h3 className="text-xl mb-5">Schedule</h3>
                        <div className="grid grid-cols-4 text-center gap-2">
                            <p className="bg-gradient2 rounded-xl py-2">
                                8am - 10am
                            </p>
                            <p className="bg-gradient2 rounded-xl py-2">
                                8am - 10am
                            </p>
                            <p className="bg-gradient2 rounded-xl py-2">
                                8am - 10am
                            </p>
                            <p className="bg-gradient2 rounded-xl py-2">
                                8am - 10am
                            </p>
                            <p className="bg-gradient2 rounded-xl py-2">
                                8am - 10am
                            </p>
                        </div>
                        
                    </div>
                </div>
                <button type="submit" className="btn bg-gradient border-none">Add Doctor</button>
            </form>
        </div>
    );
};

export default AddDoctors;
