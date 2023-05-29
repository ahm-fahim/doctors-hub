import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router/Router";
import "./SharedComponents/Css/customStyle.css";
import "react-day-picker/dist/style.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider/AuthProvider";

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />;
            <Toaster />
        </AuthProvider>
    );
}

export default App;
