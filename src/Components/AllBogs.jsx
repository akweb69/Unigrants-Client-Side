import React, { useState } from "react";
import Heading from "../Utilities/Heading";

const blogsData = [
    {
        id: 1,
        img: "https://i.ibb.co/MnQCswL/premium-photo-1682284079664-c90a1603733b.jpg",
        authorImg: "https://i.ibb.co/XxG8yQ0/asasasasasas.jpg",
        authorName: "Author 1",
        country: "USA",
        date: "Jan 1, 2025",
        title: "Blog Title 1",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 2,
        img: "https://i.ibb.co/V281qNm/man-791049-1280.jpg",
        authorImg: "https://i.ibb.co/vZgjrxs/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra-53876-143269.jpg",
        authorName: "Author 2",
        country: "Canada",
        date: "Jan 2, 2025",
        title: "Blog Title 2",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 3,
        img: "https://i.ibb.co/VqdkLTP/14928.jpg",
        authorImg: "https://i.ibb.co/Fs62mKs/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-wi.jpg",
        authorName: "Author 3",
        country: "UK",
        date: "Jan 3, 2025",
        title: "Blog Title 3",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 4,
        img: "https://i.ibb.co/hXpdF5y/2149038398.jpg",
        authorImg: "https://i.ibb.co/BybG7FF/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg",
        authorName: "Author 4",
        country: "Germany",
        date: "Jan 4, 2025",
        title: "Blog Title 4",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 5,
        img: "https://i.ibb.co/xCDBpTR/aq.jpg",
        authorImg: "https://i.ibb.co/vhGvTFX/sssss.jpg",
        authorName: "Author 5",
        country: "France",
        date: "Jan 5, 2025",
        title: "Blog Title 5",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 6,
        img: "https://i.ibb.co/Bg1kFxG/asasasasasasasasas.jpg",
        authorImg: "https://i.ibb.co/4NC6s32/close-up-shot-gorgeous-young-mixed-race-brunette-lady-looking-away-with-mysterious-smile-as-if-flirt.jpg",
        authorName: "Author 6",
        country: "Italy",
        date: "Jan 6, 2025",
        title: "Blog Title 6",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 7,
        img: "https://i.ibb.co/99RgJ6m/assssssss.jpg",
        authorImg: "https://i.ibb.co/MnQCswL/premium-photo-1682284079664-c90a1603733b.jpg",
        authorName: "Author 7",
        country: "Spain",
        date: "Jan 7, 2025",
        title: "Blog Title 7",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 8,
        img: "https://i.ibb.co/k1n685F/aaa.jpg",
        authorImg: "https://i.ibb.co/BGGSrS0/dsdsdsd.png",
        authorName: "Author 8",
        country: "India",
        date: "Jan 8, 2025",
        title: "Blog Title 8",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 9,
        img: "https://i.ibb.co/RNG4pfq/asasasasas.jpg",
        authorImg: "https://i.ibb.co/NtbH4mt/2149714407.jpg",
        authorName: "Author 9",
        country: "Australia",
        date: "Jan 9, 2025",
        title: "Blog Title 9",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 10,
        img: "https://i.ibb.co/XxG8yQ0/asasasasasas.jpg",
        authorImg: "https://i.ibb.co/99RgJ6m/assssssss.jpg",
        authorName: "Author 10",
        country: "Brazil",
        date: "Jan 10, 2025",
        title: "Blog Title 10",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 11,
        img: "https://i.ibb.co/S335kjJ/asas.jpg",
        authorImg: "https://i.ibb.co/k1n685F/aaa.jpg",
        authorName: "Author 11",
        country: "Japan",
        date: "Jan 11, 2025",
        title: "Blog Title 11",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 12,
        img: "https://i.ibb.co/BGGSrS0/dsdsdsd.png",
        authorImg: "https://i.ibb.co/hXpdF5y/2149038398.jpg",
        authorName: "Author 12",
        country: "China",
        date: "Jan 12, 2025",
        title: "Blog Title 12",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 13,
        img: "https://i.ibb.co/NtbH4mt/2149714407.jpg",
        authorImg: "https://i.ibb.co/V281qNm/man-791049-1280.jpg",
        authorName: "Author 13",
        country: "Russia",
        date: "Jan 13, 2025",
        title: "Blog Title 13",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 14,
        img: "https://i.ibb.co/vZgjrxs/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra-53876-143269.jpg",
        authorImg: "https://i.ibb.co/VqdkLTP/14928.jpg",
        authorName: "Author 14",
        country: "South Korea",
        date: "Jan 14, 2025",
        title: "Blog Title 14",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 15,
        img: "https://i.ibb.co/Fs62mKs/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-wi.jpg",
        authorImg: "https://i.ibb.co/XxG8yQ0/asasasasasas.jpg",
        authorName: "Author 15",
        country: "Mexico",
        date: "Jan 15, 2025",
        title: "Blog Title 15",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 16,
        img: "https://i.ibb.co/4NC6s32/close-up-shot-gorgeous-young-mixed-race-brunette-lady-looking-away-with-mysterious-smile-as-if-flirt.jpg",
        authorImg: "https://i.ibb.co/MnQCswL/premium-photo-1682284079664-c90a1603733b.jpg",
        authorName: "Author 16",
        country: "New Zealand",
        date: "Jan 16, 2025",
        title: "Blog Title 16",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 17,
        img: "https://i.ibb.co/vhGvTFX/sssss.jpg",
        authorImg: "https://i.ibb.co/S335kjJ/asas.jpg",
        authorName: "Author 17",
        country: "South Africa",
        date: "Jan 17, 2025",
        title: "Blog Title 17",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
    {
        id: 18,
        img: "https://i.ibb.co/MnQCswL/premium-photo-1682284079664-c90a1603733b.jpg",
        authorImg: "https://i.ibb.co/V281qNm/man-791049-1280.jpg",
        authorName: "Author 18",
        country: "Argentina",
        date: "Jan 18, 2025",
        title: "Blog Title 18",
        details: "This is a brief description of the blog content. Learn more by clicking the details button.",
    },
];


const AllBlogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(blogsData.length / blogsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div className="w-full h-full bg-gradient-to-b from-blue-50 via-teal-100 font-logoFont to-blue-50">
            <Heading one={"All Blogs & Articles"} two={"Browse through all our insights and articles"}></Heading>
            <div className="w-11/12 mx-auto">
                {/* Blog cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
                        >
                            <img
                                referrerPolicy="no-referrer"
                                src={blog.img}
                                alt={blog.title}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="mt-4 flex items-center gap-3">
                                <img
                                    src={blog.authorImg}
                                    alt={blog.authorName}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <h4 className="font-semibold">{blog.authorName}</h4>
                                    <p className="text-sm text-gray-500">{blog.country}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 mt-2">{blog.date}</p>
                            <h3 className="font-bold text-lg mt-2">{blog.title}</h3>
                            <p className="text-gray-600 mt-2">{blog.details.slice(0, 100)}...</p>
                            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                                See Details
                            </button>
                        </div>
                    ))}
                </div>

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

export default AllBlogs;
