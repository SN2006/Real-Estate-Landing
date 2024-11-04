import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./roots/home/Home.jsx";
import ContactUs from "./roots/contact-us/ContactUs.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/contact-us",
        element: <ContactUs/>
    }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
