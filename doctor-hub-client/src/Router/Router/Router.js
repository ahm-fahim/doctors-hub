import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../Layouts/MainLayouts/MainLayouts";
import Home from "../../Pages/Home/Home/Home";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import SignUp from "../../Pages/SignUp/SignUp/SignUp";
import SignIn from "../../Pages/SignUp/SignIn/SignIn";
import DashboardLayouts from "../../Layouts/DashboardLayouts/DashboardLayouts";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AddDoctors from "../../Pages/Dashboard/Doctors/AddDoctors/AddDoctors";
import UpdateDoctors from "../../Pages/Dashboard/Doctors/UpdateDoctors/UpdateDoctors";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/appointment/:id",
                element: <Appointment />,
            },
            {
                path: "/appointment/",
                element: <Appointment />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/signIn",
                element: <SignIn />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayouts />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/dashboard/addDoctors",
                element: <AddDoctors />,
            },
            {
                path: "/dashboard/updateDoctors",
                element: <UpdateDoctors />,
            },
        ],
    },
]);
