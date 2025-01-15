import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import HomePage from "../Pages/HomePage";
import Login from "../Common/Login";
import Register from "../Common/Register";
import S_Details from "../Pages/S_Details";
import All_Schol from "../Pages/All_Schol";
import Dashboard from "../User/Dashboard";
import MyProfile from "../User/MyProfile";
import MyApplication from "../User/MyApplication";
import MyReviews from "../User/MyReviews";



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
            },
            // !-----user dashboard------
            {
                path: "/user-dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/user-dashboard/profile",
                        element: <MyProfile></MyProfile>
                    },
                    {
                        path: "/user-dashboard/application",
                        element: <MyApplication></MyApplication>
                    },
                    {
                        path: "/user-dashboard/reviews",
                        element: <MyReviews></MyReviews>
                    },

                ]
            }
            // !-----user dashboard------
        ]
    }
])

export default router;