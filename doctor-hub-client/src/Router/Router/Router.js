import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../Layouts/MainLayouts/MainLayouts";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);
