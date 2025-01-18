import React, { useContext, useEffect, useState } from 'react';
import Heading from '../Utilities/Heading';
import useReviews from '../Hooks/useReviews';
import { AuthContext } from '../AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const MyReviews = () => {

    const { reviews, refetch } = useReviews();
    const { user } = useContext(AuthContext);
    const [resview, setReview] = useState([])
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        const data = reviews.filter(hi => hi.user_email === user?.email)
        console.log(data)
        setReview(data)
    }, [reviews, user])
    // delete review
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
                axiosSecure.delete(`/review_delete/?id=${id}`)
                    .then(res => {
                        const data = res.data
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        console.log("form delete review-->", err)
                    })
            }
        });
    }
    return (
        <div className='w-full min-h-screen '>
            <Heading one={"My Reviews"}></Heading>
            <div className="w-11/12 mx-auto">
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                        <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Sl No</th>
                                <th className="border border-gray-300 px-4 py-2">Scholarship Name</th>
                                <th className="border border-gray-300 px-4 py-2">University Name</th>
                                <th className="border border-gray-300 px-4 py-2">Review Comments</th>
                                <th className="border border-gray-300 px-4 py-2">Review Date</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {resview.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.scholarship_name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.university_name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.comment.slice(0, 30)}...</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.review_date}</td>
                                    <td className="border border-gray-300 px-4 py-2 flex justify-center items-center space-x-2">
                                        <button
                                            onClick={() => handleDeleteReview(item?._id)}
                                            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                            Delete
                                        </button>
                                        <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;