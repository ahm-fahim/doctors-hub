import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../Layouts/MainLayouts/MainLayouts";
import Home from "../../Pages/Home/Home/Home";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import SignUp from "../../Pages/SignUp/SignUp/SignUp";
import SignIn from "../../Pages/SignUp/SignIn/SignIn";

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
                path: "/appointment",
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
]);
