import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router/Router";
import "./SharedComponents/Css/customStyle.css";
import "react-day-picker/dist/style.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterProvider router={router} />;
                <Toaster />
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;
