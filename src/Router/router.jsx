import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import HomePage from "../Pages/HomePage";
import Login from "../Common/Login";
import Register from "../Common/Register";
import S_Details from "../Pages/S_Details";
import All_Schol from "../Pages/All_Schol";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/s-details/:id",
                element: <S_Details></S_Details>
            },
            {
                path: "/all-scholarship",
                element: <All_Schol></All_Schol>
            }
        ]
    }
])

export default router;