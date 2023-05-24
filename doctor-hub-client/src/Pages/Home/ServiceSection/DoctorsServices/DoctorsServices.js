import React from "react";
import DoctorsServiceCard from "./DoctorsServiceCard";
import img1 from "../../../../assets/images/img1.png";
import img2 from "../../../../assets/images/img2.png";
import img3 from "../../../../assets/images/img3.png";
import img4 from "../../../../assets/images/img4.png";
import img5 from "../../../../assets/images/img5.png";
import img6 from "../../../../assets/images/img6.png";

const serviceData = [
    {
        id: 1,
        name: "Dr. John Smith",
        specialty: "Cardiologist",
        education: "Medical School, ABC University",
        experience: "10 years of experience",
        hospital: "XYZ Medical Center",
        description:
            "A cardiologist is a doctor who specializes in diagnosing and treating diseases and conditions related to the heart and blood vessels.",
        image: img1,
        bgClass: "bg-white",
        color: "text-black",
    },
    {
        id: 2,
        name: "Dr. Emily Johnson",
        specialty: "Dermatologist",
        education: "Medical School, XYZ University",
        experience: "8 years of experience",
        hospital: "ABC Dermatology Clinic",
        description:
            "A dermatologist is a doctor who specializes in diagnosing and treating diseases and conditions related to the skin, hair, and nails.",
        image: img2,
        bgClass: "bg-gray-700",
        color: "text-white",
    },
    {
        id: 3,
        name: "Dr. Michael Davis",
        specialty: "Pediatrician",
        education: "Medical School, DEF University",
        experience: "12 years of experience",
        hospital: "123 Children's Hospital",
        description:
            "A pediatrician is a doctor who specializes in the medical care of infants, children, and adolescents.",
        image: img3,
        bgClass: "bg-white",
        color: "text-black",
    },
    {
        id: 4,
        name: "Dr. Sarah Wilson",
        specialty: "Orthopedic Surgeon",
        education: "Medical School, GHI University",
        experience: "15 years of experience",
        hospital: "DEF Orthopedic Hospital",
        description:
            "An orthopedic surgeon is a doctor who specializes in diagnosing and treating diseases and injuries of the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles.",
        image: img4,
        bgClass: "bg-white",
        color: "text-black",
    },
    {
        id: 5,
        name: "Dr. David Thompson",
        specialty: "Neurologist",
        education: "Medical School, JKL University",
        experience: "10 years of experience",
        hospital: "Neurology Specialists Clinic",
        description:
            "A neurologist is a doctor who specializes in diagnosing and treating diseases and conditions of the brain, spinal cord, and nervous system.",
        image: img5,
        bgClass: "bg-gray-700",
        color: "text-white",
    },
    {
        id: 6,
        name: "Dr. Jennifer Adams",
        specialty: "Gynecologist",
        education: "Medical School, MNO University",
        experience: "9 years of experience",
        hospital: "Women's Health Center",
        description:
            "A gynecologist is a doctor who specializes in women's reproductive health, including pregnancy, childbirth, and disorders of the reproductive system.",
        image: img6,
        bgClass: "bg-white",
        color: "text-black",
    },
];

const DoctorsServices = () => {
    return (
        <div className="my-16">
            <h1 className="text-3xl font-bold text-gradient">
                Doctors Services
            </h1>
            <div className="md:grid grid-cols-3 gap-8 justify-items-center">
                {serviceData.map((category) => (
                    <DoctorsServiceCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};

export default DoctorsServices;