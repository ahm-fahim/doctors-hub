import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router/Router";
import "./SharedComponents/Css/customStyle.css";
import "react-day-picker/dist/style.css";

function App() {
    return <RouterProvider router={router} />;
}

export default App;
