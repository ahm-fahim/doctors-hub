import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    // Hide or show the modal based on the isOpen prop
    const modalClasses = isOpen
        ? "fixed inset-0 flex items-center justify-center z-50"
        : "hidden";

    return (
        <div className={modalClasses}>
            {/* Background overlay */}
            <div
                className="fixed inset-0 bg-gradient2 opacity-60"
                onClick={onClose}
            ></div>

            {/* Modal content */}
            <div className="bg-white p-6 rounded-lg shadow-lg z-10">
                {children}
            </div>
        </div>
    );
};

export default Modal;
