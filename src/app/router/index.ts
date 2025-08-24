import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.pages";


export const router = createBrowserRouter([
    {
        path:'/',
        Component: Home,
    }
])