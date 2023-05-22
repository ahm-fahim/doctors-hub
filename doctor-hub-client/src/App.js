import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router/Router';
import "./SharedComponents/Css/customStyle.css"

function App() {
  return <RouterProvider router={router} />;
}

export default App;

