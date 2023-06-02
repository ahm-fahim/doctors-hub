import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const phone = user?.photoURL;

    console.log("my appointment", phone);

    const { data: bookings = [] } = useQuery({
        queryKey: ["bookings", phone],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?phone=${phone}`);
            const data = await res.json();
            return data;
        },
    });

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-gradient text-3xl font-bold">
                    My Appointment
                </h1>
                <select className="select select-accent max-w-xs">
                    <option>Date</option>
                    <option>Auto</option>
                    <option>Dark mode</option>
                    <option>Light mode</option>
                </select>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Doctor</th>
                            <th>Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((info, index) => (
                            <tr key={info._id}>
                                <th>{index + 1}</th>
                                <td>{info.patient}</td>
                                <td>{info.doctor}</td>
                                <td>{info.schedule}</td>
                                <td className="text-center">
                                    <button className="btn btn-xs btn-outline btn-circle bg-red-100  btn-error font-bold">
                                        X
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;
