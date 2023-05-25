import React from "react";
import { DayPicker } from "react-day-picker";
import "./AppointHero.css";

const AppointHero = ({ selectedDate, setSelectedDate }) => {
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
                        <h1 className="text-5xl font-bold">Doctors Info</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointHero;
