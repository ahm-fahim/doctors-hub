import React from "react";
import PrimaryButton from "../../../../../../components/PrimaryButton/PrimaryButton";

const AvailableAppointmentCard = ({ doctorInfo, appointFormInfo }) => {
    const { schedule } = doctorInfo;
    return (
        <div className="grid grid-cols-1 justify-items-center items-center  p-3 mt-5">
            <p className="font-bold">
                {schedule && schedule.length > 0
                    ? schedule[0]
                    : "Try Another Day!"}
            </p>
            <p className="text-gray-600 text-sm mb-5">
                {schedule && schedule.length}{" "}
                {schedule && schedule.length > 1 ? "Spaces" : "Space"} Available
            </p>
            <PrimaryButton
                operation={() => appointFormInfo(schedule)}
                disabled={schedule && schedule.length === 0}
            >
                Book Appointment
            </PrimaryButton>
        </div>
    );
};

export default AvailableAppointmentCard;
