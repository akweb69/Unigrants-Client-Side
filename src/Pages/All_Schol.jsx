import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import S_Card from "../Utilities/S_Card";
import errorImg from "../assets/images/rb_2506.png";
import { FaSearch } from "react-icons/fa";

const All_Schol = () => {
    const [scholarship, setScholarship] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6); // Adjust as needed
    const [totalRecords, setTotalRecords] = useState(0);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const start = (currentPage - 1) * itemsPerPage;
        axiosPublic.get(`/all_Scholarship?search=${search}&start=${start}&limit=${itemsPerPage}`)
            .then(res => {
                const { data, totalRecords } = res.data;
                setScholarship(data);
                setTotalRecords(totalRecords);
            })
            .catch(err => {
                console.log(err);
            });
    }, [search, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(totalRecords / itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="w-full min-h-screen bg-orange-50 flex justify-center items-center">
            <div className="w-11/12 mx-auto py-10">
                <h1 className="text-3xl md:text-5xl mb-4 font-logoFont font-extrabold text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto">All Scholarship</h1>

                {/* Search Bar */}
                <div className="w-full md:w-1/2 mx-auto p-1 rounded-full border border-orange-500 mb-10">
                    <div className="w-full flex justify-between items-center gap-1 flex-grow">
                        <div className="px-2"><FaSearch className="text-orange-500" /></div>
                        <div className="flex-1">
                            <input
                                onChange={(e) => setSearch(e.target.value)}
                                type="text" className="w-full outline-none bg-transparent border-0"
                                placeholder="Search Scholarship by University name, Degree, Scholarship name..." />
                        </div>
                        <div className="h-full flex justify-center items-center bg-orange-500 p-2 px-4 text-white rounded-full">
                            Search
                        </div>
                    </div>
                </div>

                {
                    scholarship.length === 0 ?
                        <div className="w-full h-full flex justify-center items-center">
                            <img className="w-full md:w-1/2 mx-auto" src={errorImg} alt="" />
                        </div> :
                        <div className="w-full md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-5 md:space-y-0">
                            {scholarship.map((schol, idx) => <S_Card key={idx} data={schol} />)}
                        </div>
                }

                {/* Pagination */}
                <div className="flex justify-center items-center mt-8 gap-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg ${currentPage === 1
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-orange-500 text-white hover:bg-orange-600"
                            }`}
                    >
                        Previous
                    </button>

                    <ul className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`px-4 py-2 rounded-lg ${currentPage === index + 1
                                        ? "bg-orange-500 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg ${currentPage === totalPages
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-orange-500 text-white hover:bg-orange-600"
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default All_Schol;
