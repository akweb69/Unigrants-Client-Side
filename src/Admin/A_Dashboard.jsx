import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const A_Dashboard = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div className="w-full min-h-screen bg-orange-50">
            <div className="md:hidden">
                {/* navbar */}
                <div className="bg-orange-400 py-2" >
                    <div className="flex w-11/12 mx-auto justify-between items-center">
                        <div className="text-2xl font-logoFont font-semibold text-white">
                            User Dashboard
                        </div>
                        <div className="text-white text-2xl p-1 border border-orange-500 rounded-md">
                            {!menu ? (
                                <span onClick={() => setMenu(true)}>
                                    <GiHamburgerMenu />
                                </span>
                            ) : (
                                <span onClick={() => setMenu(false)}>
                                    <RxCross1 />
                                </span>
                            )}
                        </div>
                    </div>
                    {/* links */}
                    {
                        menu && <div className="mt-2">

                            <ul>
                                <ul>
                                    <li onClick={() => setMenu(false)}><NavLink to={"/admin-dashboard"} className="btn rounded-none w-full  text-white btn-error">Admin Profile</NavLink></li>

                                    <li onClick={() => setMenu(false)}><NavLink to={"/admin-dashboard/analytics"} className="btn rounded-none w-full  text-white btn-error">Analytics</NavLink></li>

                                    <li onClick={() => setMenu(false)}><NavLink to={"/admin-dashboard/add-scholarship"} className="btn rounded-none w-full  text-white btn-error">Add Scholarship</NavLink></li>

                                    <li onClick={() => setMenu(false)}><NavLink to={"/admin-dashboard/manage-shcolarship"} className="btn rounded-none w-full  text-white btn-error">Manage Scholarship</NavLink></li>

                                    <li onClick={() => setMenu(false)}><NavLink to={"/admin-dashboard/manage-application"} className="btn rounded-none w-full  text-white btn-error">Manage Application</NavLink></li>

                                    <li onClick={() => setMenu(false)}><NavLink to={"/admin-dashboard/manage-users"} className="btn rounded-none w-full  text-white btn-error">Manage Users</NavLink></li>

                                    <li onClick={() => setMenu(false)}><NavLink to={"/admin-dashboard/manage-reviews"} className="btn rounded-none w-full  text-white btn-error">Manage Reviews</NavLink></li>
                                </ul>
                            </ul>

                        </div>
                    }
                </div>
                {/* outlet */}
                <div className="">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="w-full hidden md:flex h-full">
                {/* left side */}
                <div className="w-[200px] bg-orange-100 min-h-screen py-4">
                    <h1 className="text-2xl md:text-3xl font-logoFont font-extrabold text-transparent 
                    bg-gradient-to-tr from-orange-500 mb-4 to-fuchsia-500 bg-clip-text  w-fit mx-auto px-4">Dashboard</h1>

                    {/* links */}
                    <div className="">
                        <ul className="space-y-1">
                            <li><NavLink to={"/admin-dashboard"} className="btn rounded-none w-full  text-white btn-error">Admin Profile</NavLink></li>

                            <li><NavLink to={"/admin-dashboard/analytics"} className="btn rounded-none w-full  text-white btn-error">Analytics</NavLink></li>

                            <li><NavLink to={"/admin-dashboard/add-scholarship"} className="btn rounded-none w-full  text-white btn-error">Add Scholarship</NavLink></li>

                            <li><NavLink to={"/admin-dashboard/manage-shcolarship"} className="btn rounded-none w-full  text-white btn-error">Manage Scholarship</NavLink></li>

                            <li><NavLink to={"/admin-dashboard/manage-application"} className="btn rounded-none w-full  text-white btn-error">Manage Application</NavLink></li>

                            <li><NavLink to={"/admin-dashboard/manage-reviews"} className="btn rounded-none w-full  text-white btn-error">Manage Reviews</NavLink></li>

                            <li><NavLink to={"/admin-dashboard/manage-users"} className="btn rounded-none w-full  text-white btn-error">Manage Users</NavLink></li>
                        </ul>
                    </div>
                </div>
                {/* right side */}
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default A_Dashboard;