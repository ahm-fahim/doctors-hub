import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../Layouts/MainLayouts/MainLayouts";
import Home from "../../Pages/Home/Home/Home";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";

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
        ],
    },
]);
