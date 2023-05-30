import React, { useEffect, useState } from "react";
import DoctorsServiceCard from "./DoctorsServiceCard";
import Loader from "../../../../SharedComponents/Loader/Loader";

const DoctorsServices = () => {
    const [doctorsInfo, setDoctorsInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/doctors")
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setDoctorsInfo(data);
            })
            .then((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="my-16">
            <h1 className="text-3xl font-bold text-gradient">
                Doctors Services
            </h1>
            {loading ? (
                <Loader>
                    <h1 className="text-gradient text-center text-4xl font-bold">Server Error! I'll be back soon</h1>
                </Loader>
            ) : (
                <div className="md:grid grid-cols-3 gap-8 justify-items-center">
                    {doctorsInfo.map((info) => (
                        <DoctorsServiceCard key={info._id} info={info} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DoctorsServices;
