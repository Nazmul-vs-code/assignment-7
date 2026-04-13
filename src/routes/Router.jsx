import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";
import Homepage from "../pages/Homepage/Homepage";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: '/timeline',
                element: <Timeline />
            },
            {
                path: '/stats',
                element: <Stats />
            },
        ]
    }
])