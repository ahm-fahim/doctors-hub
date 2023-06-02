import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../Layouts/MainLayouts/MainLayouts";
import Home from "../../Pages/Home/Home/Home";
import Appointment from "../../Pages/Home/ServiceSection/DoctorsServices/Appointment/Appointment/Appointment";
import SignUp from "../../Pages/SignUp/SignUp/SignUp";
import SignIn from "../../Pages/SignUp/SignIn/SignIn";
import DashboardLayouts from "../../Layouts/DashboardLayouts/DashboardLayouts";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AddDoctors from "../../Pages/Dashboard/Doctors/AddDoctors/AddDoctors";
import UpdateDoctors from "../../Pages/Dashboard/Doctors/UpdateDoctors/UpdateDoctors";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";

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
        element: (
            <PrivateRoute>
                <DashboardLayouts />
            </PrivateRoute>
        ),
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/dashboard/myAppointment",
                element: <MyAppointment />,
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
