import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebaseConig";
import axios from "axios";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Register = () => {

    const { setUser, user, createUserWithEmailAndPass, googleLogin, loading, setLoading } = useContext(AuthContext);

    const { register, handleSubmit } = useForm()
    const imgbb_api_hosting_key = import.meta.env.VITE_IMGBB_API_KEY
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();


    const onSubmit = async (data) => {
        console.log(data)
        // ! upload image on imgbb hosting site
        const imgFile = { image: data.photo[0] }


        const res = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbb_api_hosting_key}`, imgFile, {
            headers: {
                'content-type': "multipart/form-data"
            }
        })
        if (res.data.success) {
            const user = {
                name: data.name,
                email: data.email,
                img: res.data.data.display_url,
                role: "user"
            }

            axiosPublic.post("/users", user)
                .then(res => {
                    console.log("database-data---->", res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        createUserWithEmailAndPass(data.email, data.password)
            .then(res => {
                setUser(res.data)
                updateProfile(auth.currentUser, {
                    displayName: data.name, photoURL: "photo"
                }).then(() => {
                    toast.success("Register success!")
                    setLoading(false)
                }).catch((error) => {
                    console.log(error)
                });
            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })
    }
    // on google or social login system
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                setLoading(false)
                const userData = res.user
                console.log("user--->", userData)
                setUser(userData)
                toast.success("Login success!")
                const user = {
                    name: userData?.displayName,
                    email: userData?.email,
                    img: userData?.photoURL,
                    role: "user"
                }
                axiosPublic.post(`/users/?email=${userData?.email}`, user)
                    .then(res => {

                        console.log(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })

            })
            .catch(err => {
                setLoading(false)
                console.log(err)
            })

    }

    return (
        <div className="w-full ">
            <div className="w-11/12 mx-auto md:w-full">
                <div className="flex flex-col-reverse md:flex md:flex-row w-full min-h-screen">

                    {/* left side */}
                    <div className="flex-1 w-full h-full min-h-screen bg-gray-100">
                        <div className="p-5">
                            <h1 className="text-3xl md:text-5xl font-bold font-logoFont pb-10">Create Account</h1>
                            {/* form */}
                            <form className="font-secondary" onSubmit={handleSubmit(onSubmit)}>
                                {/* email */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-lg">User Name</span>
                                    </div>
                                    <input {...register("name")} type="text" placeholder="Abu Kalam" className="input input-bordered w-full" />
                                </label>
                                {/* email */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </div>
                                    <input {...register("email")} type="email" placeholder="example@gmail.com" className="input input-bordered w-full" />
                                </label>
                                {/* password */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </div>
                                    <input {...register("password")} type="password" placeholder="password" className="input input-bordered w-full" />
                                </label>

                                {/* profile photo */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-lg">Profile Photo</span>
                                    </div>
                                    <input {...register("photo")} type="file" className="file-input text-lg file-input-bordered w-full" />
                                </label>
                                {/* btn */}
                                <div className="my-5">
                                    <button className="w-full py-2 text-lg font-semibold text-center bg-blue-500 rounded-lg text-white hover:bg-blue-600 focus:outline-none transform hover:scale-102 transition duration-300 shadow-md hover:shadow-lg font-primary" >
                                        Login
                                    </button>

                                </div>
                                {/* forget password */}
                                <p className="text-sm hover:text-blue-500 hover:underline cursor-pointer">Forget Password</p>
                            </form>
                            {/* google login */}
                            <div className="">
                                <div
                                    onClick={handleGoogleLogin}
                                    className="flex justify-center items-center gap-2 text-lg cursor-pointer p-3 border rounded-lg shadow-lg hover:shadow-xl transform hover:scale-102 transition duration-300 my-5 bg-white hover:bg-blue-50">
                                    <FaGoogle className="text-blue-500 text-2xl" />
                                    <span className="font-semibold  font-primary text-gray-800">Login With Google</span>
                                </div>

                            </div>
                            {/* navigate register page */}
                            <div className="text-sm">
                                <p className="">Allready Have An Account , <Link className="hover:text-blue-500 hover:underline text-blue-400 font-semibold font-primary" to={"/login"}>Login</Link></p>
                            </div>
                        </div>
                    </div>
                    {/* right sside */}
                    <div className="w-full md:w-[60%] md:h-screen "><img src="https://i.ibb.co/ry1PcZB/register.jpg" className="w-full h-full object-cover" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Register;