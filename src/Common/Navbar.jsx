import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";

const Navbar = () => {
    const [hover, setHover] = useState(false)
    const { user, logout, loading } = useContext(AuthContext);
    return (
        <div className="w-full h-16 backdrop-blur-md">
            <div className="w-11/12  mx-auto h-full flex justify-between items-center">
                {/* left logo */}
                <div className="">
                    <h1 className="text-2xl md:text-4xl font-logoFont font-extrabold"><b className="text-orange-500">U</b>ni<b className="text-orange-500">G</b>rants</h1>
                </div>
                {/* right links */}
                <div className="flex-1">
                    <div className="flex w-full items-center justify-end lg:text-lg font-secondary">

                        <NavLink className='hover:bg-orange-400 hover:text-white rounded-sm px-[0.75rem] py-[0.5rem]' to={'/'}>Home</NavLink>

                        <NavLink className='hover:bg-orange-400 hover:text-white rounded-sm px-[0.75rem] py-[0.5rem]' to={'/all-scholarship'}>All Scholarship</NavLink>

                        {
                            user && user?.email ? <NavLink className='hover:bg-orange-400 hover:text-white rounded-sm px-[0.75rem] py-[0.5rem]' to={'/user-dashboard'}>Dashboard</NavLink> : ''
                        }
                        {
                            user && user?.email ? <div
                                onClick={logout}
                                className='hover:bg-orange-400 hover:text-white rounded-sm px-[0.75rem] py-[0.5rem]' >Logout</div> : ''
                        }
                        {
                            user && user?.email ?
                                <div className="w-12 h-12 ml-4 rounded-full border border-orange-500 ">
                                    <img className="w-full h-full rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
                                </div>
                                :
                                <div className="">
                                    <Link
                                        onMouseEnter={() => setHover(true)}
                                        onMouseLeave={() => setHover(false)}
                                        to={'/login'} className="px-3 py-2 rounded-sm hover:bg-orange-500 border border-orange-500 hover:text-white">Login</Link>
                                    <Link to={"/register"} className={`px-3 py-2 rounded-sm  border border-orange-500 text-white ${hover ? "bg-white text-black" : "bg-orange-500"}`}>Register</Link>
                                </div>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;