import useApplyByUser from "../Hooks/useApplyByUser";
import { FaCheckCircle } from "react-icons/fa";
import { MdPending } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import toast from "react-hot-toast";
import Heading from "../Utilities/Heading";
import { useForm } from "react-hook-form";


const MyApplication = () => {
    const axiosSecure = useAxiosSecure();
    const { userApply, isLoading, refetch } = useApplyByUser();
    const navigate = useNavigate();
    const [reviewModal, setReviewModal] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('')
    const [sc_id_data, setSc_id_data] = useState({})
    const [schol_id, setSchol_id] = useState("")
    const [statusPending, setStatusPending] = useState(false);
    const [editData, setEditeData] = useState({});
    const { register, handleSubmit } = useForm();

    // ! handleCancelApplication -------
    const handleCancelApplication = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Close",
            confirmButtonText: "Yes, Cancel  Application!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteApplication/?id=${id}`)
                    .then(res => {
                        const data = res.data;
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your Application has been Canceled.",
                                icon: "success",

                            });
                        }
                        refetch()
                    })
                    .catch(err => {
                        console.log(err)
                    })


            }
        });


    }
    const handleNavigate = () => {
        navigate("/all-scholarship")
    }
    // ! reviews modal


    const handleRatingChange = (e) => {
        setRating(parseInt(e.target.value));
    }

    // ! open the modal
    const handleGiveReviewBtn = (id, sch_id) => {
        console.log("sch-id======>", sch_id)
        setSchol_id(sch_id)
        setReviewModal(true)
        const data = userApply.filter(hi => hi._id === id)
        const user_photo_url = data[0]?.data?.photo;
        const user_name = data[0]?.data?.userName;
        const user_email = data[0]?.data?.user_email;
        const university_name = data[0]?.schol_data?.universityName;
        const scholarship_name = data[0]?.schol_data?.scholarshipName;
        const scholarship_id = id

        const initialData = {
            user_photo_url, user_name, user_email, university_name, scholarship_name, scholarship_id
        }
        setSc_id_data(initialData)

    }

    const handleReviewModal = () => {

        const date = new Date();
        const toady = date.toDateString();
        const finalReviewData = {
            ...sc_id_data,
            rating: parseInt(rating),
            comment: comment,
            review_date: toady,
        }
        // add rating to the scholarship data--->
        axiosSecure.patch(`/update_rating_point/?id=${schol_id}&rating=${rating}`)
            .then(res => {
                const data = res.data;
                console.log(data)
            })
            .catch(err => {
                console.log("from rating update-->", err)
            })

        axiosSecure.post("/reviews", finalReviewData)
            .then(res => {
                const data = res.data;
                if (data.acknowledged) {
                    toast.success("Successfully Add Your Review!")
                    console.log(finalReviewData)
                    setReviewModal(false)
                }

            })
            .catch(err => {
                console.log("from--->", err)
            })
    }

    // ! edit function
    const [app_id, setApp_id] = useState('')
    const [submitLoading, setSubmitLoading] = useState(false)

    const handleEditApply = (id, status) => {
        if (status === "processing") {
            setApp_id(id)
            const data = userApply.filter(k => k._id === id)[0]
            console.log("dattatata-->", data.data)
            setEditeData(data.data)
            setStatusPending(true)
        }
        else {
            toast.error("Can not edit the application is processing!")
        }

    }
    const handleCancelEditeModal = () => {
        setStatusPending(false)
    }
    const editAplly = (data) => {
        setSubmitLoading(true)
        axiosSecure.patch(`/update_application_info/?id=${app_id}`, data)
            .then(res => {
                const data = res.data;
                if (data.modifiedCount > 0) {
                    refetch()
                    setSubmitLoading(false)
                    toast.success("Updated success!")
                    setEditeData(false)
                }

            })
            .catch(err => {
                toast.error("Something went wrong try again letter")
                setSubmitLoading(false)
            })
        console.log(data)

    }

    return (
        <div className="w-full h-full ">
            <Heading one={"My Applications"}></Heading>
            {/* modal  reviews*/}
            {
                reviewModal && <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm flex justify-center items-center">
                    <div className="w-11/12 mx-auto md:w-1/2 p-4 md:p-10 bg-white rounded-xl relative">
                        <div
                            onClick={() => setReviewModal(false)}
                            className="absolute top-0 right-0 p-3 rounded-r-xl bg-red-500 text-white hover:bg-red-400 hover:text-black cursor-pointer">
                            X
                        </div>
                        {/* content */}
                        <div className="font-logoFont">
                            {/* rating */}
                            <div className="">
                                <div className="text-xl py-1">Rate The Scholarship</div>
                                <div className="rating">
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        value="1"
                                        onChange={handleRatingChange}
                                    />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        value="2"
                                        onChange={handleRatingChange}
                                        defaultChecked
                                    />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        value="3"
                                        onChange={handleRatingChange}
                                    />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        value="4"
                                        onChange={handleRatingChange}
                                    />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        value="5"
                                        onChange={handleRatingChange}
                                    />
                                </div>

                            </div>
                            {/* comment */}
                            <div className="py-2">
                                <div className="text-xl">Comment</div>
                                <textarea
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="Write Your Comment Here..." name="comment" className="w-full textarea textarea-warning"></textarea>
                            </div>
                            {/* submit */}
                            <button onClick={handleReviewModal} className="border btn btn-warning btn-sm">Submit</button>
                        </div>
                    </div>

                </div>
            }
            {/* edit applications */}
            {
                statusPending && <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm flex justify-center items-center">
                    <div className="w-11/12 mx-auto md:w-1/2 p-4 md:p-10 max-h-[70vh] overflow-y-scroll bg-white rounded-xl relative">
                        <div
                            onClick={() => handleCancelEditeModal()}
                            className="absolute top-0 right-0 p-2 px-5 text-lg font-bold rounded-l-full bg-red-500 hover:bg-red-800 text-white font-logoFont cursor-pointer">X
                        </div>
                        <h1 className="text-2xl md:text-4xl py-4 font-bold font-logoFont text-orange-500">Update Application</h1>
                        {/* form */}
                        <div className="">
                            <form className="md:grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0" onSubmit={handleSubmit(editAplly)}>
                                {/* number */}
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Applicant Phone Number*</span>
                                    </div>
                                    <input defaultValue={editData?.phone} {...register("phone")} type="number" placeholder="Phone Number" className="input input-bordered w-full " />
                                </label>
                                {/* gendar  */}
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Applicant Gender*</span>

                                    </div>
                                    <select
                                        defaultValue={editData?.gender}
                                        {...register("gender")} className="select select-bordered">
                                        <option disabled selected>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>

                                </label>
                                {/* adress */}
                                <p className="col-span-2 w-full">Applicant Address*</p>
                                <div className="col-span-2 md:grid grid-cols-3 gap-4 space-y-4 md:space-y-0">
                                    <input
                                        defaultValue={editData?.vill}
                                        {...register("vill")} type="text" placeholder="Village Name" className="input input-bordered w-full " />
                                    <input
                                        defaultValue={editData?.dist}
                                        {...register("dist")} type="text" placeholder="District Name" className="input input-bordered w-full " />
                                    <input
                                        defaultValue={editData?.country}
                                        {...register("country")} type="text" placeholder="Country Name" className="input input-bordered w-full " />
                                </div>
                                {/* result */}
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">SSC Result*</span>
                                    </div>
                                    <input
                                        defaultValue={editData?.ssc}
                                        {...register("ssc")} type="number" placeholder="5.00" className="input input-bordered w-full " />
                                </label>
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">HSC Result*</span>
                                    </div>
                                    <input
                                        defaultValue={editData?.hsc}
                                        {...register("hsc")} type="number" placeholder="5.00" className="input input-bordered w-full " />
                                </label>
                                {/* degree  */}
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Applicant Applying Degree*</span>
                                    </div>
                                    <select
                                        defaultValue={editData?.degree}
                                        {...register("degree")} className="select select-bordered">
                                        <option disabled selected>Select Degree</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="Bachelor">Bachelor</option>
                                        <option value="Masters">Masters</option>
                                    </select>
                                </label>
                                {/* gap */}
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Study Gap Years</span>
                                    </div>
                                    <input
                                        defaultValue={editData?.gap}
                                        {...register("gap")} type="number" placeholder="If have then put that" className="input input-bordered w-full " />
                                </label>

                                <button className="text-center col-span-2 bg-orange-500 text-white px-5 py-2 mt-4 rounded-xl cursor-pointer hover:bg-orange-400">
                                    {
                                        submitLoading ? "Updating..." : "Update"
                                    }
                                </button>
                            </form>
                        </div>

                    </div>

                </div>
            }

            {
                isLoading ? <div className="w-full h-full py-14 flex justify-center bg-white items-center ">
                    <span className="loading loading-bars loading-lg text-warning "></span>
                </div>
                    :
                    <>

                        {
                            userApply.length > 0 && <div className="w-11/12 mx-auto py-10 p-4 bg-white  rounded-lg">
                                <div className="overflow-x-scroll  w-full mt-6">
                                    <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                                        <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                                            <tr>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Sl No</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">University Name</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">University Address</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Application Feedback</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Subject Category</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Applied Degree</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Application Fees</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Service Charge</th>
                                                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                                                <th className="border border-gray-300 px-4 py-2 text-center">Actions</th>
                                                <th className="border border-gray-300 px-4 py-2 text-center">Review</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                            {/* Example Row */}

                                            {userApply.length > 0 && userApply.map((app, idx) => <tr key={idx} className="hover:bg-gray-100">
                                                <td className="border border-gray-300 px-4 py-2">{idx + 1}</td>
                                                <td className="border border-gray-300 px-4 py-2">{app?.schol_data?.universityName}</td>
                                                <td className="border border-gray-300 px-4 py-2">{app?.schol_data?.universityCity} , {app?.schol_data?.universityCountry}</td>
                                                <td className="border border-gray-300 px-4 py-2">{app?.feedback ? app?.feedback : "N/A"}</td>
                                                <td className="border border-gray-300 px-4 py-2">{app?.schol_data?.subjectCategory}</td>
                                                <td className="border border-gray-300 px-4 py-2">{app?.data?.degree}</td>

                                                <td className="border border-gray-300 px-4 py-2">${app?.schol_data?.applicationFees}</td>
                                                <td className="border border-gray-300 px-4 py-2">${app?.schol_data?.serviceCharge}</td>
                                                {/* status */}
                                                <td className="border border-gray-300 px-4 py-2">
                                                    {app.data?.status === "pending" && <span className="px-3 py-1 bg-yellow-500 text-white rounded-lg text-xs flex items-center gap-[2px]"> <MdPending></MdPending> Pending</span>}

                                                    {app.data?.status === "processing" && <span className="px-3 py-1 bg-green-500 text-white rounded-lg text-xs flex items-center gap-[2px]"> <MdPending></MdPending> Processing  </span>}

                                                    {app.data?.status === "completed" && <span className="px-3 py-1 bg-green-500 text-white rounded-lg text-xs flex items-center gap-[2px]"> <FaCheckCircle></FaCheckCircle> Completed</span>}

                                                </td>
                                                <td className="border border-gray-300 gap-2 flex flex-col justify-center items-center px-4 py-2 text-center">
                                                    <Link to={`/s-details/${app?.schol_data?._id}`} className="px-3 w-full py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                                        Details
                                                    </Link>
                                                    <button
                                                        onClick={() => handleEditApply(app?._id, app?.data?.status)}
                                                        className="px-3 w-full py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleCancelApplication(app?._id)}
                                                        className=" w-full px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                                        Cancel
                                                    </button>
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    <button
                                                        onClick={() => handleGiveReviewBtn(app?._id, app?.data?.scholarship_id)}
                                                        className=" w-full px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                                        Give Review
                                                    </button>
                                                </td>

                                            </tr>)
                                            }

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        }
                        {
                            userApply.length === 0 && <div className="">
                                <div className="w-11/12 py-14 mx-auto h-full flex flex-col justify-center items-center">
                                    <p className="text-2xl md:text-4xl font-semibold font-logoFont text-red-600">You Didn't Apply Any Scholarship</p>
                                    <img
                                        onClick={handleNavigate}
                                        className="w-full md:w-1/2 mx-auto hover:scale-105  cursor-pointer" src="https://i.ibb.co/3MGvn9J/appplynow.png" alt="" />
                                </div>

                            </div>
                        }


                    </>

            }

        </div>
    );
};

export default MyApplication;