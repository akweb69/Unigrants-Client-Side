import { useEffect } from "react";
import useAll_Schol from "../Hooks/useAll_Schol";
import useApplyByUser from "../Hooks/useApplyByUser";


const MyApplication = () => {

    const { userApply, isLoading, refetch } = useApplyByUser();





    return (
        <div className="w-full h-full py-10">
            {
                isLoading ? <div className="w-full h-full py-14 flex justify-center bg-white items-center ">
                    <span className="loading loading-bars loading-lg text-warning "></span>
                </div>
                    :
                    <div className="w-11/12 mx-auto py-10 p-4 bg-white  rounded-lg">
                        <div className="overflow-x-scroll  w-full mt-6">
                            <table className="table border-collapse border border-gray-300 w-full text-sm">
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
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {/* Example Row */}
                                    {userApply.length > 0 && userApply.map((app, idx) => <tr key={idx} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">{idx + 1}</td>
                                        <td className="border border-gray-300 px-4 py-2">{app?.schol_data?.universityName}</td>
                                        <td className="border border-gray-300 px-4 py-2">{app?.schol_data?.universityCity} , {app?.schol_data?.universityCountry}</td>
                                        <td className="border border-gray-300 px-4 py-2">todo</td>
                                        <td className="border border-gray-300 px-4 py-2">{app?.schol_data?.subjectCategory}</td>
                                        <td className="border border-gray-300 px-4 py-2">{app?.data?.degree}</td>

                                        <td className="border border-gray-300 px-4 py-2">${app?.schol_data?.applicationFees}</td>
                                        <td className="border border-gray-300 px-4 py-2">${app?.schol_data?.serviceCharge}</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            <span className="px-3 py-1 bg-green-500 text-white rounded-lg text-xs">Accepted</span>
                                        </td>
                                        <td className="border border-gray-300 gap-2 flex flex-col justify-center items-center px-4 py-2 text-center">
                                            <button className="px-3 w-full py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                                Details
                                            </button>
                                            <button className="px-3 w-full py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                                Edit
                                            </button>
                                            <button className=" w-full px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>

                    </div>

            }

        </div>
    );
};

export default MyApplication;