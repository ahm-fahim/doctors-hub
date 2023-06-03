import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../SharedComponents/Loader/Loader";

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const phone = user?.photoURL;
    const [date, setDate] = useState(new Date());

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ["bookings", phone, date],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/bookings?phone=${phone}&date=${date}`
            );
            const data = await res.json();
            return data;
        },
    });
    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h1 className="text-gradient text-3xl font-bold">
                    My Appointment
                </h1>
                <select
                    onChange={(e) => setDate(e.target.value)}
                    className="select select-accent max-w-xs"
                >
                    {bookings.map((date) => (
                        <option value={date.appointDate}>
                            {date.appointDate}
                        </option>
                    ))}
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
