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
import A_Dashboard from "../Admin/A_Dashboard";
import A_Profile from "../Admin/A_Profile";
import A_AddScholarship from "../Admin/A_AddScholarship";
import A_ManageScholarship from "../Admin/A_ManageScholarship";
import A_M_Application from "../Admin/A_M_Application";
import A_M_Users from "../Admin/A_M_Users";
import A_M_Review from "../Admin/A_M_Review";



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
                        path: "/user-dashboard",
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
            // !-----Admin dashboard------
            , {
                path: "/admin-dashboard",
                element: <A_Dashboard></A_Dashboard>,
                children: [
                    {
                        path: "/admin-dashboard",
                        element: <A_Profile></A_Profile>
                    },
                    {
                        path: "/admin-dashboard/add-scholarship",
                        element: <A_AddScholarship></A_AddScholarship>
                    },
                    {
                        path: "/admin-dashboard/manage-shcolarship",
                        element: <A_ManageScholarship></A_ManageScholarship>
                    },
                    {
                        path: "/admin-dashboard/manage-application",
                        element: <A_M_Application></A_M_Application>
                    },
                    {
                        path: "/admin-dashboard/manage-users",
                        element: <A_M_Users></A_M_Users>
                    },
                    {
                        path: "/admin-dashboard/manage-reviews",
                        element: <A_M_Review></A_M_Review>
                    }
                ]
            }
        ]
    }
])

export default router;