import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,  // Corrected here
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);
