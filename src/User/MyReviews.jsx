import React, { useContext, useEffect, useState } from 'react';
import Heading from '../Utilities/Heading';
import useReviews from '../Hooks/useReviews';
import { AuthContext } from '../AuthContext/AuthProvider';

const MyReviews = () => {

    const [reviews] = useReviews();
    const { user } = useContext(AuthContext);
    const [resview, setReview] = useState([])
    useEffect(() => {
        const data = reviews.filter(hi => hi.user_email === user?.email)
        console.log(data)
        setReview(data)
    }, [reviews, user])
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
                                <tr key={item.id} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.scholarship_name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.university_name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.comment.slice(0, 30)}...</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.review_date}</td>
                                    <td className="border border-gray-300 px-4 py-2 flex justify-center items-center space-x-2">
                                        <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
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