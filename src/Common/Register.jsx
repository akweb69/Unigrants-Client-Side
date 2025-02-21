import { useContext, useState } from "react";
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
    const { setUser, createUserWithEmailAndPass, googleLogin, setLoading } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgbb_api_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [regloading, setRegloading] = useState(false);

    const onSubmit = async (data) => {
        console.log(data);
        setRegloading(true);

        // Upload image to Imgbb
        const imgFile = new FormData();
        imgFile.append("image", data.photo[0]);

        try {
            const res = await axios.post(
                `https://api.imgbb.com/1/upload?key=${imgbb_api_hosting_key}`,
                imgFile,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (res.data.success) {
                const uploadedPhotoURL = res.data?.data?.display_url;
                console.log("Uploaded Photo URL:", uploadedPhotoURL);

                // Save user data in the database
                const user = {
                    name: data?.name,
                    email: data?.email,
                    img: uploadedPhotoURL,
                    role: "user",
                };

                await axiosPublic.post("/users", user);
                console.log("User data saved to database");

                // Create Firebase user
                const userCredential = await createUserWithEmailAndPass(data.email, data.password);

                // Update Firebase user profile
                await updateProfile(auth.currentUser, {
                    displayName: data.name,
                    photoURL: uploadedPhotoURL,
                });

                // Set user state and navigate
                setUser(userCredential.user);
                toast.success("Register success!");
                navigate("/");
            }
        } catch (error) {
            console.error(error);
            toast.error("Registration failed. Please try again.");
        } finally {
            setRegloading(false);
            setLoading(false);
        }
    };

    // Google login handler
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const userData = res.user;
                console.log("Google Login User:", userData);
                setUser(userData);
                toast.success("Login success!");

                const user = {
                    name: userData?.displayName,
                    email: userData?.email,
                    img: userData?.photoURL,
                    role: "user",
                };

                axiosPublic.post(`/users/?email=${userData?.email}`, user)
                    .then(res => console.log("User saved in DB:", res.data))
                    .catch(err => console.error(err));

                navigate("/");
            })
            .catch(err => {
                console.error(err);
                toast.error("Google login failed. Please try again.");
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="w-full">
            <div className="w-11/12 mx-auto md:w-full">
                <div className="flex flex-col-reverse md:flex md:flex-row w-full min-h-screen">
                    {/* Left side */}
                    <div className="flex-1 w-full h-full min-h-screen bg-gray-100">
                        <div className="p-5">
                            <h1 className="text-3xl md:text-5xl font-bold font-logoFont pb-10">Create Account</h1>
                            {/* Form */}
                            <form className="font-secondary" onSubmit={handleSubmit(onSubmit)}>
                                {/* User Name */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-lg">User Name</span>
                                    </div>
                                    <input required {...register("name")} type="text" placeholder="Abu Kalam" className="input input-bordered w-full" />
                                </label>
                                {/* Email */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </div>
                                    <input required {...register("email")} type="email" placeholder="example@gmail.com" className="input input-bordered w-full" />
                                </label>
                                {/* Password */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </div>
                                    <input
                                        required
                                        {...register("password", {
                                            validate: {
                                                hasUpperCase: (value) =>
                                                    /[A-Z]/.test(value) || "Password must contain at least one capital letter (A-Z)",
                                                hasNumber: (value) =>
                                                    /\d/.test(value) || "Password must contain at least one number (0-9)",
                                                hasSpecialChar: (value) =>
                                                    /[@$!%*?&]/.test(value) || "Password must contain at least one special character (@, $, !, %, *, ?, &)",
                                                minLength: (value) =>
                                                    value.length >= 6 || "Password must be at least 6 characters long",
                                            },
                                        })}
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                                {errors.password && (
                                    <p className="text-red-500 pt-2 text-sm">{errors.password.message}</p>
                                )}
                                {/* Profile Photo */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-lg">Profile Photo</span>
                                    </div>
                                    <input required {...register("photo")} type="file" className="file-input text-lg file-input-bordered w-full" />
                                </label>
                                {/* Submit Button */}
                                <div className="my-5">
                                    <button
                                        className="w-full py-2 text-lg font-semibold text-center bg-blue-500 rounded-lg text-white hover:bg-blue-600 focus:outline-none transform hover:scale-102 transition duration-300 shadow-md hover:shadow-lg font-primary"
                                    >
                                        {regloading ? <div className="flex justify-center items-center gap-4">Creating Wait... <span className="loading-bars loading-lg text-orange-500"></span></div> : "Register Now"}
                                    </button>
                                </div>
                                {/* Forgot Password */}
                                <p className="text-sm hover:text-blue-500 hover:underline cursor-pointer">Forget Password</p>
                            </form>
                            {/* Google Login */}
                            <div
                                onClick={handleGoogleLogin}
                                className="flex justify-center items-center gap-2 text-lg cursor-pointer p-3 border rounded-lg shadow-lg hover:shadow-xl transform hover:scale-102 transition duration-300 my-5 bg-white hover:bg-blue-50"
                            >
                                <FaGoogle className="text-blue-500 text-2xl" />
                                <span className="font-semibold font-primary text-gray-800">Login With Google</span>
                            </div>
                            {/* Navigate to Login */}
                            <div className="text-sm">
                                <p>
                                    Already Have An Account?{" "}
                                    <Link className="hover:text-blue-500 hover:underline text-blue-400 font-semibold font-primary" to="/login">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="w-full md:w-[60%] md:h-screen">
                        <img src="https://i.ibb.co/ry1PcZB/register.jpg" referrerPolicy="no-referrer" className="w-full h-full object-cover" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
