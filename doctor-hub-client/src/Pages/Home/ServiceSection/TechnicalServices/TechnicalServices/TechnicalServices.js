import React from "react";
import TechnicalServiceCard from "../TechnicalServiceCard/TechnicalServiceCard";

const technicalServiceData = [
    {
        id: 1,
        name: "Complete Blood Count (CBC)",
        price: 50.0,
    },
    {
        id: 2,
        name: "Blood Glucose Test",
        price: 30.0,
    },
    {
        id: 3,
        name: "Lipid Profile",
        price: 80.0,
    },
    {
        id: 4,
        name: "Liver Function Test (LFT)",
        price: 60.0,
    },
    {
        id: 5,
        name: "Kidney Function Test (KFT)",
        price: 70.0,
    },
    {
        id: 6,
        name: "Thyroid Function Test (TFT)",
        price: 55.0,
    },
    {
        id: 7,
        name: "Electrocardiogram (ECG)",
        price: 90.0,
    },
    {
        id: 8,
        name: "Chest X-ray",
        price: 75.0,
    },
    {
        id: 9,
        name: "Computed Tomography (CT) Scan",
        price: 300.0,
    },
    {
        id: 10,
        name: "Magnetic Resonance Imaging (MRI)",
        price: 500.0,
    },
    {
        id: 11,
        name: "Ultrasound",
        price: 150.0,
    },
    {
        id: 12,
        name: "Colonoscopy",
        price: 400.0,
    },
    {
        id: 13,
        name: "Endoscopy",
        price: 350.0,
    },
    {
        id: 14,
        name: "Pap Smear",
        price: 45.0,
    },
    {
        id: 15,
        name: "Mammogram",
        price: 120.0,
    },
    {
        id: 16,
        name: "Prostate-Specific Antigen (PSA) Test",
        price: 65.0,
    },
    {
        id: 17,
        name: "Bone Density Test",
        price: 95.0,
    },
    {
        id: 18,
        name: "HIV Test",
        price: 50.0,
    },
    {
        id: 19,
        name: "Stool Culture",
        price: 80.0,
    },
    {
        id: 20,
        name: "Urinalysis",
        price: 25.0,
    },
];

const TechnicalServices = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gradient">
                Technical Services
            </h1>
            <div className="md:grid grid-cols-5 gap-5 justify-items-center items-center">
                {technicalServiceData.map((info) => (
                    <TechnicalServiceCard key={info.id} info={info} />
                ))}
            </div>
        </div>
    );
};

export default TechnicalServices;
