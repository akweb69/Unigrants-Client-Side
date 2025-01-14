import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="w-full ">
            <div className="w-11/12 mx-auto md:w-full">
                <div className="md:grid md:grid-cols-3 ">
                    {/* right sside */}
                    <div className="col-span-2 md:h-screen "><img src="https://i.ibb.co/8s7drjn/slider1.jpg" className="w-full h-full object-cover" alt="" /></div>
                    {/* left side */}
                    <div className="col-span-1 w-full h-full bg-gray-100">
                        <div className="p-5">
                            <h1 className="text-3xl md:text-5xl font-bold font-logoFont pb-10">Login</h1>
                            {/* form */}
                            <form onSubmit={handleSubmit(onSubmit)}>
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
                                <div className="flex justify-center items-center gap-2 text-lg cursor-pointer p-3 border rounded-lg shadow-lg hover:shadow-xl transform hover:scale-102 transition duration-300 my-5 bg-white hover:bg-blue-50">
                                    <FaGoogle className="text-blue-500 text-2xl" />
                                    <span className="font-semibold  font-primary text-gray-800">Login With Google</span>
                                </div>

                            </div>
                            {/* navigate register page */}
                            <div className="text-sm">
                                <p className="">If Doesn't Have An Account , <Link className="hover:text-blue-500 hover:underline text-blue-400 font-semibold font-primary" to={"/register"}>Create Account</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;