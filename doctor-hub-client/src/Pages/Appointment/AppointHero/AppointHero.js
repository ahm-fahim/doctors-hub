import React from "react";
import { DayPicker } from "react-day-picker";
import "./AppointHero.css";

const AppointHero = ({ doctorInfo, selectedDate, setSelectedDate }) => {
    const { image, name, specialty,education } = doctorInfo;
    return (
        <div>
            <div className="hero my-16">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <DayPicker
                        className="shadow-lg rounded-xl p-5"
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        modifiersClassNames={{
                            selected: "my-selected",
                            today: "my-today",
                        }}
                        modifiersStyles={{
                            disabled: { fontSize: "75%" },
                        }}
                    />
                    <div>
                        <img src={image} className="h-1/2 rounded-xl" alt="" />
                        <h1 className="text-3xl font-bold mt-3">{name}</h1>
                        <p className="text-gradient text-sm">{specialty}</p>
                        <p className="text-gray-500 text-sm">{education}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointHero;
