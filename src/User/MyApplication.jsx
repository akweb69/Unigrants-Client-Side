import useApplyByUser from "../Hooks/useApplyByUser";
import { FaCheckCircle } from "react-icons/fa";
import { MdPending } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";
import toast from "react-hot-toast";
import Heading from "../Utilities/Heading";


const MyApplication = () => {
    const axiosSecure = useAxiosSecure();
    const { userApply, isLoading, refetch } = useApplyByUser();
    const navigate = useNavigate();


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
    const [reviewModal, setReviewModal] = useState(false);
    const [rating, setRating] = useState(2);
    const [comment, setComment] = useState('')
    const [sc_id_data, setSc_id_data] = useState({})

    const handleRatingChange = (e) => {
        setRating(parseInt(e.target.value));
    }

    // ! open the modal
    const handleGiveReviewBtn = (id) => {
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


    return (
        <div className="w-full h-full ">
            <Heading one={"My Applications"}></Heading>
            {/* modal  reviews*/}
            {
                reviewModal && <div className="w-full min-h-screen flex justify-center items-center bg-[rgba(0,0,0,0.2)] backdrop-blur-sm fixed top-0">
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
                                                    <button className="px-3 w-full py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
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
                                                        onClick={() => handleGiveReviewBtn(app?._id)}
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