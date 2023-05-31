import React, { createContext, useState } from "react";

export const DateContext = createContext();

const DateProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const dateSelection = (date) => {
        setSelectedDate(date);
    }

    const dateInfo = { selectedDate, dateSelection };
    return (
        <DateContext.Provider value={dateInfo}>{children}</DateContext.Provider>
    );
};

export default DateProvider;
