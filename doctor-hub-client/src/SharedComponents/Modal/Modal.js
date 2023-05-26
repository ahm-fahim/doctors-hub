import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    // Hide or show the modal based on the isOpen prop
    const modalClasses = isOpen
        ? "fixed inset-0 flex items-end md:items-center justify-center z-50"
        : "hidden";

    return (
        <div className={modalClasses}>
            {/* Background overlay */}
            <div
                className="fixed inset-0 bg-gradient2 opacity-60"
                onClick={onClose}
            ></div>

            {/* Modal content */}
            <div className=" bg-white px-6 rounded-lg shadow-lg z-10 ">
                <button
                    className="text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    <svg
                        className="w-12 h-12 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 11.414l4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95L.636 16.364l4.95-4.95L.636 6.464 1.414 5.05l4.95 4.95L11.364 5.05l.778 1.414-4.95 4.95z"
                        />
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
