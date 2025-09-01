import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import EventPage from "../pages/EventPage.jsx";
import RootLayout from "../layouts/RootLayout.jsx";


const router = createBrowserRouter([
    {
        path: "/", // 이 경로와 칠드런의 경로를 조합해서 씀
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true, // path가 비어있을때 사용
                element: <HomePage/>
            },
            {
                path: "events",
                element: <EventPage/>
            }
        ]
    },

]);

export default router;