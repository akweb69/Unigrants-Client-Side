import { FaTrashAlt } from "react-icons/fa";
import { MdStar, MdDateRange } from "react-icons/md";
import useReviews from "../Hooks/useReviews";
import Heading from "../Utilities/Heading";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Nodatapage from "../Utilities/Nodatapage";

const A_M_Review = () => {
    const { reviews, refetch, isLoading } = useReviews();
    const axiosSecure = useAxiosSecure();

    const handleDeleteReview = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"

        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/delete_review/?id=${id}`)
                    .then(res => {
                        const data = res.data;
                        console.log("from dleel-->", data)
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Review has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })


            }
        });

    }

    return (
        <div className="w-full min-h-screen bg-gray-100 py-10">
            <Heading one={"Manage Reviews"}></Heading>
            <div className="w-11/12 mx-auto">
                {isLoading ? (
                    <div className="w-full h-full py-14 flex justify-center items-center">
                        <div className="loading-bars text-orange-500 loading-lg"></div>
                    </div>
                ) : (
                    // Handle no data
                    reviews?.length === 0 ? (
                        <Nodatapage one={"Opps! No Reviews  Available Yet."}></Nodatapage>
                    ) : (
                        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {reviews?.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 shadow-lg bg-white rounded-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    {/* User Info */}
                                    <div className="flex items-center space-x-4 mb-4">
                                        <img
                                            src={item?.user_photo_url}
                                            alt={item?.user_name}
                                            className="w-12 h-12 rounded-full border-2 border-gray-300"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-800">{item?.user_name}</p>
                                            <p className="text-sm text-gray-500">{item?.user_email}</p>
                                        </div>
                                    </div>

                                    {/* Review Content */}
                                    <div className="mb-4">
                                        <h4 className="font-bold text-gray-800 mb-1">
                                            {item?.scholarship_name}
                                        </h4>
                                        <p className="text-sm text-gray-600">{item?.university_name}</p>
                                    </div>

                                    {/* Rating and Comment */}
                                    <div className="mb-4">
                                        <p className="flex items-center text-yellow-500 font-semibold mb-1">
                                            <MdStar className="mr-1 text-lg" />
                                            {item?.rating} / 5
                                        </p>
                                        <p className="text-gray-600 text-sm">{item?.comment}</p>
                                    </div>

                                    {/* Review Date */}
                                    <div className="flex items-center text-sm text-gray-500 mb-4">
                                        <MdDateRange className="mr-1 text-gray-400" />
                                        {item?.review_date}
                                    </div>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDeleteReview(item._id)}
                                        className="flex items-center justify-center w-full py-2 text-red-500 border border-red-500 rounded-md hover:bg-red-50 transition-colors duration-300"
                                    >
                                        <FaTrashAlt className="mr-2" /> Delete Review
                                    </button>
                                </div>
                            ))}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default A_M_Review;
