import React, { useEffect, useState } from "react";
import DoctorsServiceCard from "./DoctorsServiceCard";

const DoctorsServices = () => {
    const [doctorsInfo, setDoctorsInfo] = useState([]);

    useEffect(() => {
        fetch("doctors.json")
            .then((res) => res.json())
            .then((data) => setDoctorsInfo(data));
    }, []);

    return (
        <div className="my-16">
            <h1 className="text-3xl font-bold text-gradient">
                Doctors Services
            </h1>
            <div className="md:grid grid-cols-3 gap-8 justify-items-center">
                {doctorsInfo.map((info) => (
                    <DoctorsServiceCard key={info.id} info={info} />
                ))}
            </div>
        </div>
    );
};

export default DoctorsServices;
