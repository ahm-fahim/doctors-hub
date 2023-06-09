import React from "react";
import DoctorsServiceCard from "../DoctorsServiceCard/DoctorsServiceCard";
import Loader from "../../../../../SharedComponents/Loader/Loader";
import { useQuery } from "@tanstack/react-query";

const DoctorsServices = () => {
    const { data: doctorsInfo = [], isLoading } = useQuery({
        queryKey: ["doctors"],
        queryFn: () =>
            fetch(`http://localhost:5000/doctors`).then((res) => res.json()),
    });

    if (isLoading) {
        return (
            <Loader>
                <h1 className="text-gradient text-center text-4xl font-bold">
                    Server Error! I'll be back soon
                </h1>
            </Loader>
        );
    }

    return (
        <div className="my-16">
            <h1 className="text-3xl font-bold text-gradient">
                Doctors Services
            </h1>

            <div className="md:grid grid-cols-3 gap-8 justify-items-center">
                {doctorsInfo.map((info) => (
                    <DoctorsServiceCard key={info._id} info={info} />
                ))}
            </div>
        </div>
    );
};

export default DoctorsServices;
