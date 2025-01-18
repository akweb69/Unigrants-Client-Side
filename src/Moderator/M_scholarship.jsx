import { FaDeleteLeft } from "react-icons/fa6";
import useAll_Schol from "../Hooks/useAll_Schol";
import Heading from "../Utilities/Heading";
import { MdOutlineDescription } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

const M_scholarship = () => {
    const [scholarship, refetch] = useAll_Schol();
    return (
        <div className="w-full min-h-screen ">
            <Heading one={"Manage Scholarship"}></Heading>
            <div className="w-11/12 mx-auto">
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                        <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Sl No</th>
                                <th className="border border-gray-300 px-4 py-2">Scholarship Name</th>
                                <th className="border border-gray-300 px-4 py-2">University Name</th>
                                <th className="border border-gray-300 px-4 py-2">Subject Category</th>
                                <th className="border border-gray-300 px-4 py-2">Degree</th>
                                <th className="border border-gray-300 px-4 py-2">Application Fees</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {scholarship?.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.scholarshipName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.universityName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.subjectCategory}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.degree}</td>
                                    <td className="border border-gray-300 px-4 py-2">${item?.applicationFees}</td>
                                    <td className="border border-gray-300 px-4 py-2 flex justify-center items-center space-x-2">
                                        <Link to={`/s-details/${item?._id}`} className="tooltip" data-tip="View Details" >
                                            <button
                                                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                                <MdOutlineDescription></MdOutlineDescription>
                                            </button>
                                        </Link>

                                        <div className="tooltip" data-tip="Edit">
                                            <button
                                                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                                <CiEdit className="text-white font-bold"></CiEdit>
                                            </button>
                                        </div>

                                        <div className="tooltip" data-tip="Delete">
                                            <button
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
        </div>
    );
};

export default M_scholarship;