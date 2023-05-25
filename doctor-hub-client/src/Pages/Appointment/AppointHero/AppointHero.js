import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "./AppointHero.css";

const AppointHero = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <div className="hero my-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
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
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <h1 className="text-gradient font-bold flex items-center justify-center">
                Available Service On{" "}
                <span className="text-2xl ml-3">
                    {" "}
                    {format(selectedDate, "PP")}
                </span>
            </h1>
        </div>
    );
};

export default AppointHero;
