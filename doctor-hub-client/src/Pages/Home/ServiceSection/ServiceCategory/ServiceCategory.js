import React from "react";
import CategoryCard from "./CategoryCard";
import img1 from "../../../../assets/images/img1.png";
import img2 from "../../../../assets/images/img2.png";
import img3 from "../../../../assets/images/img3.png";
import img4 from "../../../../assets/images/img4.png";
import img5 from "../../../../assets/images/img5.png";

const serviceData = [
    {
        id: 1,
        img: img1,
        specialty: "Cardiologist",
        description:
            "A cardiologist is a doctor who specializes in diagnosing and treating diseases and conditions related to the heart and blood vessels.",
    },
    {
        id: 2,
        img: img2,
        specialty: "Dermatologist",
        description:
            "A dermatologist is a doctor who specializes in diagnosing and treating diseases and conditions related to the skin, hair, and nails.",
    },
    {
        id: 3,
        img: img3,
        specialty: "Pediatrician",
        description:
            "A pediatrician is a doctor who specializes in the medical care of infants, children, and adolescents.",
    },
    {
        id: 4,
        img: img4,
        specialty: "Orthopedic Surgeon",
        description:
            "An orthopedic surgeon is a doctor who specializes in diagnosing and treating diseases and injuries of the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles.",
    },
    {
        id: 5,
        img: img5,
        specialty: "Neurologist",
        description:
            "A neurologist is a doctor who specializes in diagnosing and treating diseases and conditions of the brain, spinal cord, and nervous system.",
    },
];

const ServiceCategory = () => {
    return (
        <div className="md:grid grid-cols-3 gap-8 justify-center items-center">
            {serviceData.map((category) => (
                <CategoryCard key={category.id} category={category} />
            ))}
        </div>
    );
};

export default ServiceCategory;
