import { MdOutlineDescription, MdPending } from "react-icons/md";
import useAllApply from "../Hooks/useAllApply";
import Heading from "../Utilities/Heading";
import { CiEdit } from "react-icons/ci";
import { FaDeleteLeft, FaEnvelope, FaGenderless, FaPhone, FaUserGraduate } from "react-icons/fa6";
import { FaCalendarAlt, FaCheckCircle, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Nodatapage from "../Utilities/Nodatapage";
import { BsPersonBadge } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const A_M_Application = () => {

    const [applications, refetch, isLoading] = useAllApply();
    const [feedbackModal, setFeedbackModal] = useState(false)
    const [feedback, setFeedback] = useState("");
    const [id, setId] = useState("")
    const axiosSecure = useAxiosSecure()
    const [deatilsModal, setDetailsModal] = useState(false);
    const [detailsData, setDetailsData] = useState({})


    const handleModal = (id) => {
        setFeedbackModal(true)
        setId(id)

    }
    const handleFeedback = () => {
        const data = { feedback }

        axiosSecure.patch(`/add_feedback/?id=${id}`, data)
            .then(res => {
                const data = res.data
                if (data.modifiedCount > 0) {
                    toast.success("Added your feedback!")
                    refetch();
                    setFeedbackModal(false)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const hanldeDeleteApplication = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!",
            cancelButtonText: "Close"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteApplication/?id=${id}`)
                    .then(res => {
                        const data = res.data;
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Canceled!",
                                text: "Application Has Been Canceled!.",
                                icon: "success"
                            });
                            toast.success("Cancel Application success!")
                        }
                    })
                    .catch(err => {
                        console.log("form appl delete-->", err)
                    })
            }
        });

    }

    const handleDetails = (id) => {
        setDetailsModal(true)
        const data = applications.filter(hi => hi._id === id)[0];
        setDetailsData(data)
        console.log("form --details=-->", data)

    }
    const [allData, setAllData] = useState([])
    useEffect(() => {
        setAllData(applications)
    }, [applications])

    const handleSorting = (e) => {
        toast.success(`Sorted by ${e}`)
        if (e === "applied_date") {
            const newData = applications.sort((a, b) => {
                const dateA = (a.data.apply_date);
                const dateB = (b.data.apply_date);
                return dateA - dateB;
            });
            setAllData(newData)
        }
        if (e === "deadline") {
            const newData = applications.sort((a, b) => {
                const dateA = (a.schol_data.applicationDeadline);
                const dateB = (b.schol_data.applicationDeadline);
                return dateA - dateB;
            });

            setAllData(newData)
        }
        else {

            setAllData(applications)
        }

    }

    return (
        <div className="w-full min-h-screen">
            {/* feedback modal */}
            {
                feedbackModal && <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
                        {/* content */}
                        <label className="form-control w-full mb-5 ">
                            <div className="label">
                                <span className="label-text text-xl font-semibold font-logoFont">Give Feedback*</span>

                            </div>
                            <input
                                onChange={(e) => setFeedback(e.target.value)}
                                type="text" placeholder="Write Feedback here..." className="input input-warning input-bordered w-full" />

                        </label>
                        {/* btn */}
                        <div className="w-full grid grid-cols-2 gap-4 items-center">
                            <div onClick={() => setFeedbackModal(false)} className="btn btn-warning w-full">Close</div>
                            <div onClick={() => handleFeedback()} className="btn btn-error w-full">Submit</div>
                        </div>
                    </div>

                </div>
            }
            {/* details modal */}
            {
                deatilsModal && <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white font-logoFont max-h-[80vh] overflow-y-scroll rounded-lg shadow-lg p-8 w-11/12 md:w-2/3 lg:w-1/2 relative">
                        {/* Title */}
                        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 flex items-center">
                            <BsPersonBadge className="text-blue-600 mr-3 " /> Application Details
                        </h1>
                        <div
                            onClick={() => setDetailsModal(false)}
                            className="text-2xl font-bold text-white p-2 bg-red-500 absolute top-2 cursor-pointer hover:bg-red-700  right-0 rounded-r-lg"><RxCross1></RxCross1></div>
                        {/* Scholarship Details */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Scholarship Information</h2>
                            <p className="text-lg text-gray-700 flex items-center mb-2">
                                <FaUniversity className="text-blue-500 mr-3" />
                                <strong className="mr-2">Scholarship:</strong> {detailsData?.schol_data?.scholarshipName}
                            </p>
                            <p className="text-lg text-gray-700 flex items-center mb-2">
                                <FaUniversity className="text-green-500 mr-3" />
                                <strong className="mr-2">University:</strong> {detailsData?.schol_data?.universityName}
                            </p>
                            <p className="text-lg text-gray-700 flex items-center mb-2">
                                <FaMapMarkerAlt className="text-red-500 mr-3" />
                                <strong className="mr-2">Location:</strong> {detailsData?.schol_data?.universityCity}, {detailsData?.schol_data?.universityCountry}
                            </p>
                            <p className="text-lg text-gray-700 flex items-center mb-2">
                                <FaUserGraduate className="text-purple-500 mr-3" />
                                <strong className="mr-2">Category:</strong> {detailsData?.schol_data?.scholarshipCategory}
                            </p>
                            <p className="text-lg text-gray-700 flex items-center mb-2">
                                <FaUserGraduate className="text-orange-500 mr-3" />
                                <strong className="mr-2">Degree:</strong> {detailsData?.schol_data?.degree}
                            </p>
                        </div>

                        <hr className="border-gray-300 my-6" />

                        {/* Applicant Info */}
                        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Applicant Information</h2>
                        <div className="flex items-center gap-6 mb-8">
                            <img
                                src={detailsData?.data?.photo}
                                alt="Applicant"
                                className="w-20 h-20 rounded-full shadow-md"
                            />
                            <div>
                                <p className="text-lg text-gray-700 flex items-center mb-2">
                                    <BsPersonBadge className="text-blue-500 mr-3" />
                                    <strong className="mr-2">Name:</strong> {detailsData?.data?.userName}
                                </p>
                                <p className="text-lg text-gray-700 flex items-center mb-2">
                                    <FaEnvelope className="text-red-500 mr-3" />
                                    <strong className="mr-2">Email:</strong> {detailsData?.data?.user_email}
                                </p>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="mb-8">
                            <p className="text-lg text-gray-700 flex items-center mb-2">
                                <FaPhone className="text-green-500 mr-3" />
                                <strong className="mr-2">Phone:</strong> {detailsData?.data?.phone}
                            </p>
                            <p className="text-lg text-gray-700 flex items-center mb-2">
                                <FaGenderless className="text-purple-500 mr-3" />
                                <strong className="mr-2">Sex:</strong> {detailsData?.data?.gender}
                            </p>
                            <p className="text-lg text-gray-700 flex items-start mb-4">
                                <FaMapMarkerAlt className="text-red-500 mr-3" />
                                <strong className="mr-2">Address:</strong>
                                <span className="ml-3">
                                    <span className="block">Village: {detailsData?.data?.vill}</span>
                                    <span className="block">District: {detailsData?.data?.dist}</span>
                                    <span className="block">Country: {detailsData?.data?.country}</span>
                                </span>
                            </p>
                            <p className="text-lg text-gray-700 flex items-center mb-2">
                                <FaUserGraduate className="text-orange-500 mr-3" />
                                <strong className="mr-2">Applied Degree:</strong> {detailsData?.data?.degree}
                            </p>
                            <p className="text-lg text-gray-700 flex items-center mb-2">
                                <FaCalendarAlt className="text-blue-500 mr-3" />
                                <strong className="mr-2">Applied Date:</strong> {detailsData?.data?.apply_date}
                            </p>
                        </div>

                        {/* Academic Results */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">Academic Results</h3>
                            <table className="table-auto w-full border border-gray-300 rounded-lg">
                                <thead>
                                    <tr className="bg-gray-100 text-left text-gray-700">
                                        <th className="px-4 py-2">Examination</th>
                                        <th className="px-4 py-2">GPA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2">HSC</td>
                                        <td className="border px-4 py-2">{detailsData?.data?.hsc}</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border px-4 py-2">SSC</td>
                                        <td className="border px-4 py-2">{detailsData?.data?.ssc}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* button */}
                        <div
                            onClick={() => setDetailsModal(false)}
                            className="btn btn-warning">Okey</div>
                    </div>

                </div>
            }

            <Heading one={"Manage Applications"}></Heading>
            {/* sorting  */}
            <div className="w-full flex justify-center pb-6">
                <div className=" w-52  mx-auto ">
                    <select
                        onChange={(e) => handleSorting(e.target.value)}
                        defaultValue={"default"}
                        name="sort" className=" w-full select select-warning bg-transparent">
                        <option value="default">Sorted By Default</option>
                        <option value="applied_date">Sorted By Applied Date</option>
                        <option value="deadline">Sorted By Deadline</option>
                    </select>
                </div>
            </div>

            <div className="">
                {
                    isLoading ? <div className="w-full flex justify-center items-center py-14">
                        <div className="loading-bars text-warning loading-lg"></div>:
                    </div> :
                        <div className="">
                            {
                                applications.length === 0 ? <Nodatapage one={"Opp!  No Available Application Yet."}></Nodatapage> : <div className="w-11/12 mx-auto">
                                    <div className="overflow-x-auto">
                                        <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                                            <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                                                <tr>
                                                    <th className="border border-gray-300 px-4 py-2">Sl No</th>
                                                    <th className="border border-gray-300 px-4 py-2">Applicant Name</th>
                                                    <th className="border border-gray-300 px-4 py-2">Applicant Email</th>
                                                    <th className="border border-gray-300 px-4 py-2">Scholarship Name</th>
                                                    <th className="border border-gray-300 px-4 py-2">University Name</th>
                                                    <th className="border border-gray-300 px-4 py-2">Application Fees</th>
                                                    <th className="border border-gray-300 px-4 py-2">Status</th>
                                                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white">
                                                {allData?.map((item, index) => (
                                                    <tr key={index} className="hover:bg-gray-100">
                                                        <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                                        <td className="border border-gray-300 px-4 py-2">{item?.data?.userName}</td>
                                                        <td className="border border-gray-300 px-4 py-2">{item?.data?.user_email}</td>
                                                        <td className="border border-gray-300 px-4 py-2">{item?.schol_data?.scholarshipName}</td>
                                                        <td className="border border-gray-300 px-4 py-2">{item?.schol_data?.universityName}</td>
                                                        <td className="border border-gray-300 px-4 py-2">${item?.schol_data?.applicationFees}</td>
                                                        <td className="border border-gray-300 px-4 py-2">
                                                            {item?.data?.status === "pending" && <span className="px-3 py-1 bg-yellow-500 text-white rounded-lg text-xs flex items-center gap-[2px]"> <MdPending></MdPending> Pending</span>}

                                                            {item?.data?.status === "processing" && <span className="px-3 py-1 bg-green-500 text-white rounded-lg text-xs flex items-center gap-[2px]"> <MdPending></MdPending> Processing  </span>}

                                                            {item?.data?.status === "completed" && <span className="px-3 py-1 bg-green-500 text-white rounded-lg text-xs flex items-center gap-[2px]"> <FaCheckCircle></FaCheckCircle> Completed</span>}

                                                        </td>


                                                        <td className="border border-gray-300 px-4 py-2 flex justify-center items-center space-x-2">
                                                            <div className="tooltip" data-tip="View Details" >
                                                                <button
                                                                    onClick={() => handleDetails(item?._id)}
                                                                    className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                                                    <MdOutlineDescription></MdOutlineDescription>
                                                                </button>
                                                            </div>

                                                            <div className="tooltip" data-tip="Feedback">
                                                                <button
                                                                    onClick={() => handleModal(item?._id)}
                                                                    className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                                                    <CiEdit className="text-white font-bold"></CiEdit>
                                                                </button>
                                                            </div>

                                                            <div className="tooltip" data-tip="Cancel">
                                                                <button
                                                                    onClick={() => hanldeDeleteApplication(item?._id)}
                                                                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                                                    <FaDeleteLeft></FaDeleteLeft>
                                                                </button>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default A_M_Application;