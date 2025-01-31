import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Component/Home/Home/Home";
import Graphenehc from "../Component/Shared/Graphenehc/Graphenehc";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,  // Corrected here
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'graphenehc',
                element: <Graphenehc></Graphenehc>
            }
            
        ]
    }
]);
