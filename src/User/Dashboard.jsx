import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="w-full min-h-screen bg-orange-50">
            <div className="w-full flex h-full">
                <div className="w-[250px] bg-orange-100 min-h-screen py-4">
                    <h1 className="text-2xl md:text-3xl font-logoFont font-extrabold text-transparent 
                    bg-gradient-to-tr from-orange-500 mb-4 to-fuchsia-500 bg-clip-text  w-fit mx-auto">Dashboard</h1>
                    {/* <div className="divider"></div> */}
                    {/* links */}
                    <div className="">
                        <ul>
                            <li><NavLink to={"/user-dashboard/profile"} className="btn rounded-none w-full  text-white btn-error">My Profile</NavLink></li>

                            <li><NavLink to={"/user-dashboard/application"} className="btn rounded-none w-full  text-white btn-error">My Application</NavLink></li>

                            <li><NavLink to={"/user-dashboard/reviews"} className="btn rounded-none w-full  text-white btn-error">My Reviews</NavLink></li>
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

export default Dashboard;