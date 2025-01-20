import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useEffect } from "react";
import useAllUser from "../Hooks/useAllUser";
import toast from "react-hot-toast";

const Navbar = () => {
    // todo ---> responsivness

    const [hover, setHover] = useState(false)
    const { user, logout, loading } = useContext(AuthContext);
    const [role, setRole] = useState("");
    const [users, refetch, isLoading] = useAllUser();
    const [navBg, setNavBg] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const dUser = users.filter(hi => hi.email === user?.email)[0]
        setRole(dUser?.role)
    }, [users, isLoading, user])

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };


    }, []);

    const handleLogOut = () => {
        logout()
            .then(res => {
                toast.success("Logout success!")
                navigate("/")
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div className={`${navBg ? " fixed w-full top-0 z-10" : ""} transition-all duration-300 h-16 backdrop-blur-md bg-teal-100`}>
            <div className="w-11/12  mx-auto h-full flex justify-between items-center">
                {/* left logo */}
                <div className="">
                    <Link to={"/"} className="text-2xl md:text-4xl font-logoFont font-extrabold"><b className="text-orange-500">U</b>ni<b className="text-orange-500">G</b>rants</Link>
                </div>
                {/* right links */}
                <div className="flex-1">
                    <div className="flex w-full items-center justify-end lg:text-lg font-secondary">

                        <NavLink className='hover:bg-orange-400 hover:text-white rounded-sm px-[0.75rem] py-[0.5rem]' to={'/'}>Home</NavLink>

                        <NavLink className='hover:bg-orange-400 hover:text-white rounded-sm px-[0.75rem] py-[0.5rem]' to={'/all_blogs'}>Blogs</NavLink>

                        <NavLink className='hover:bg-orange-400 hover:text-white rounded-sm px-[0.75rem] py-[0.5rem]' to={'/how_to_apply'}>How To Apply</NavLink>

                        <NavLink className='hover:bg-orange-400 hover:text-white rounded-sm px-[0.75rem] py-[0.5rem]' to={'/all-scholarship'}>All Scholarship</NavLink>
                        <NavLink className='hover:bg-orange-400 hover:text-white rounded-sm px-[0.75rem] py-[0.5rem]' to={'/about'}>About</NavLink>

                        {
                            user && user?.email && role === "user" ? <NavLink className='hover:bg-orange-400 hover:text-white rounded-sm px-[0.75rem] py-[0.5rem]' to={'/user-dashboard'}>Dashboard</NavLink> : ''
                        }
                        {
                            user && user?.email && role === "Admin" ? <NavLink className='hover:bg-orange-400 hover:text-white rounded-sm px-[0.75rem] py-[0.5rem]' to={'/admin-dashboard'}> Admin Dashboard</NavLink> : ''
                        }
                        {
                            user && user?.email && role === "Moderator" ? <NavLink className='hover:bg-orange-400 hover:text-white rounded-sm px-[0.75rem] py-[0.5rem]' to={'/mod-dashboard'}> Moderator Dashboard</NavLink> : ''
                        }
                        {
                            user && user?.email ? <div
                                onClick={handleLogOut}
                                className='hover:bg-orange-400 hover:text-white rounded-sm px-[0.75rem] py-[0.5rem] cursor-pointer' >Logout</div> : ''
                        }
                        {
                            user && user?.email ?
                                <div className="w-12 h-12 ml-4 rounded-full border border-orange-500 ">
                                    <img className="w-full h-full rounded-full" referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
                                </div>
                                :
                                <div className="ml-4">
                                    <Link
                                        onMouseEnter={() => setHover(true)}
                                        onMouseLeave={() => setHover(false)}
                                        to={'/login'} className="px-3 py-2 rounded-sm hover:bg-orange-500 border border-orange-500 hover:text-white">Login</Link>

                                    <Link to={"/register"} className={`px-3 py-2 rounded-sm  border border-orange-500 text-black ${hover ? "bg-white text-black" : "bg-orange-500"}`}>Register</Link>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;