import React, { useState } from "react";
import Heading from "../Utilities/Heading";
import { motion } from "framer-motion";
const blogsData = [
    {
        id: 1,
        img: "https://i.ibb.co/MnQCswL/premium-photo-1682284079664-c90a1603733b.jpg",
        authorImg: "https://i.ibb.co/XxG8yQ0/asasasasasas.jpg",
        authorName: "John Doe",
        country: "USA",
        date: "Jan 1, 2025",
        title: "10 Tips to Boost Productivity in 2025",
        details: "Discover actionable tips to improve your productivity and achieve your goals this year.",
    },
    {
        id: 2,
        img: "https://i.ibb.co/V281qNm/man-791049-1280.jpg",
        authorImg: "https://i.ibb.co/vZgjrxs/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra-53876-143269.jpg",
        authorName: "Alex Smith",
        country: "Canada",
        date: "Jan 2, 2025",
        title: "The Future of Remote Work: Trends to Watch",
        details: "Explore the latest trends shaping the future of remote work and how to adapt.",
    },
    {
        id: 3,
        img: "https://i.ibb.co/VqdkLTP/14928.jpg",
        authorImg: "https://i.ibb.co/Fs62mKs/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-wi.jpg",
        authorName: "Emily Johnson",
        country: "UK",
        date: "Jan 3, 2025",
        title: "Top 5 Books to Read This Winter",
        details: "A curated list of must-read books to keep you inspired during the colder months.",
    },
    {
        id: 4,
        img: "https://i.ibb.co/hXpdF5y/2149038398.jpg",
        authorImg: "https://i.ibb.co/BybG7FF/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg",
        authorName: "Sophia Lee",
        country: "Germany",
        date: "Jan 4, 2025",
        title: "Healthy Habits to Start the New Year Right",
        details: "Learn about simple yet powerful habits to improve your health and well-being.",
    },
    {
        id: 5,
        img: "https://i.ibb.co/xCDBpTR/aq.jpg",
        authorImg: "https://i.ibb.co/vhGvTFX/sssss.jpg",
        authorName: "Michael Brown",
        country: "France",
        date: "Jan 5, 2025",
        title: "The Art of Minimalist Living",
        details: "Discover how minimalism can transform your life and bring clarity to your goals.",
    },
    {
        id: 6,
        img: "https://i.ibb.co/Bg1kFxG/asasasasasasasasas.jpg",
        authorImg: "https://i.ibb.co/4NC6s32/close-up-shot-gorgeous-young-mixed-race-brunette-lady-looking-away-with-mysterious-smile-as-if-flirt.jpg",
        authorName: "Isabella Martinez",
        country: "Italy",
        date: "Jan 6, 2025",
        title: "5 Easy Italian Recipes You Can Try at Home",
        details: "Cook delicious and authentic Italian dishes with these easy-to-follow recipes.",
    },
    {
        id: 7,
        img: "https://i.ibb.co/99RgJ6m/assssssss.jpg",
        authorImg: "https://i.ibb.co/MnQCswL/premium-photo-1682284079664-c90a1603733b.jpg",
        authorName: "Daniel Wilson",
        country: "Spain",
        date: "Jan 7, 2025",
        title: "Exploring the Vibrant Culture of Spain",
        details: "A journey through the colorful traditions, art, and history of Spain.",
    },
    {
        id: 8,
        img: "https://i.ibb.co/k1n685F/aaa.jpg",
        authorImg: "https://i.ibb.co/BGGSrS0/dsdsdsd.png",
        authorName: "Priya Sharma",
        country: "India",
        date: "Jan 8, 2025",
        title: "The Rise of Sustainable Fashion in India",
        details: "How India is leading the way in eco-friendly and ethical fashion.",
    },
    {
        id: 9,
        img: "https://i.ibb.co/RNG4pfq/asasasasas.jpg",
        authorImg: "https://i.ibb.co/NtbH4mt/2149714407.jpg",
        authorName: "Oliver Taylor",
        country: "Australia",
        date: "Jan 9, 2025",
        title: "Best Outdoor Adventures in Australia",
        details: "Uncover thrilling activities and breathtaking landscapes down under.",
    },
    {
        id: 10,
        img: "https://i.ibb.co/XxG8yQ0/asasasasasas.jpg",
        authorImg: "https://i.ibb.co/99RgJ6m/assssssss.jpg",
        authorName: "Ana Costa",
        country: "Brazil",
        date: "Jan 10, 2025",
        title: "Carnival in Brazil: What to Expect",
        details: "A guide to experiencing Brazil's most famous festival like a local.",
    },
    {
        id: 11,
        img: "https://i.ibb.co/XxG8yQ0/asasasasasas.jpg",
        authorImg: "https://i.ibb.co/BybG7FF/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg",
        authorName: "Hannah Williams",
        country: "New Zealand",
        date: "Jan 11, 2025",
        title: "Eco-Tourism: Travel with a Purpose",
        details: "Learn how to explore the world while preserving nature and supporting local communities.",
    },
    {
        id: 12,
        img: "https://i.ibb.co/XxG8yQ0/asasasasasas.jpg",
        authorImg: "https://i.ibb.co/Fs62mKs/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-wi.jpg",
        authorName: "Liam Carter",
        country: "South Africa",
        date: "Jan 12, 2025",
        title: "The Untamed Beauty of South Africa",
        details: "A glimpse into South Africa's stunning landscapes and unique wildlife.",
    },
    {
        id: 13,
        img: "https://i.ibb.co/qmkZnPn/aaaaaaaaaaaaaaaa.jpg",
        authorImg: "https://i.ibb.co/qmkZnPn/aaaaaaaaaaaaaaaa.jpg",
        authorName: "Amelia Walker",
        country: "Norway",
        date: "Jan 13, 2025",
        title: "Chasing the Northern Lights: A Guide to Norway",
        details: "Everything you need to know about witnessing the aurora borealis in Norway.",
    },
    {
        id: 14,
        img: "https://i.ibb.co/XxG8yQ0/asasasasasas.jpg",
        authorImg: "https://i.ibb.co/HzfCv6k/man-smiling.jpg",
        authorName: "Ethan Roberts",
        country: "Singapore",
        date: "Jan 14, 2025",
        title: "Top 10 Tech Innovations to Watch in 2025",
        details: "Discover groundbreaking technology trends that will shape the future.",
    },
    {
        id: 15,
        img: "https://i.ibb.co/Z2rTnVw/fitness-blog.jpg",
        authorImg: "https://i.ibb.co/ygN7sgf/woman-athlete.jpg",
        authorName: "Emma Clark",
        country: "Australia",
        date: "Jan 15, 2025",
        title: "Fitness Trends You Should Try This Year",
        details: "Explore exciting new workouts and wellness practices for a healthier lifestyle.",
    },
    {
        id: 16,
        img: "https://i.ibb.co/XxG8yQ0/asasasasasas.jpg",
        authorImg: "https://i.ibb.co/vVkGVHF/chef-smiling.jpg",
        authorName: "Lucas Garcia",
        country: "Mexico",
        date: "Jan 16, 2025",
        title: "A Journey Through Mexican Cuisine",
        details: "Dive into the flavors and traditions of authentic Mexican cooking.",
    },
    {
        id: 17,
        img: "https://i.ibb.co/XxG8yQ0/asasasasasas.jpg",
        authorImg: "https://i.ibb.co/fxrCYNJ/environmentalist.jpg",
        authorName: "Olivia Adams",
        country: "Sweden",
        date: "Jan 17, 2025",
        title: "Sustainability in Everyday Life",
        details: "Learn simple ways to make your lifestyle more eco-friendly.",
    },
    {
        id: 18,
        img: "https://i.ibb.co/fdVdGcm/startup-blog.jpg",
        authorImg: "https://i.ibb.co/j4c6bGz/young-entrepreneur.jpg",
        authorName: "James Taylor",
        country: "USA",
        date: "Jan 18, 2025",
        title: "Building a Startup: Lessons from My Journey",
        details: "Insights and challenges faced while launching a successful startup.",
    },
    {
        id: 19,
        img: "https://i.ibb.co/qMjXvxs/travel-india.jpg",
        authorImg: "https://i.ibb.co/Wz5p3d5/indian-woman.jpg",
        authorName: "Aarohi Gupta",
        country: "India",
        date: "Jan 19, 2025",
        title: "Exploring the Golden Triangle of India",
        details: "A traveler's guide to Delhi, Agra, and Jaipur: the jewels of India.",
    },
    {
        id: 20,
        img: "https://i.ibb.co/RvdtJdp/science-blog.jpg",
        authorImg: "https://i.ibb.co/fxVNmZx/scientist.jpg",
        authorName: "Sophia Carter",
        country: "Germany",
        date: "Jan 20, 2025",
        title: "The Latest Breakthroughs in Renewable Energy",
        details: "Discover cutting-edge developments in solar, wind, and green energy.",
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
        <div className="w-full h-full pb-14 bg-gradient-to-b from-blue-50 via-teal-100 font-logoFont to-blue-50">
            <Heading one={"All Blogs & Articles"} two={"Browse through all our insights and articles"}></Heading>
            <div className="w-11/12 mx-auto">
                {/* Blog cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentBlogs.map((blog) => (
                        <motion.div
                            initial={{ y: 80, opacity: 0, scale: 0.95 }}
                            whileInView={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{
                                duration: 1.2,
                                delay: 0.2,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}

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
                        </motion.div>
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
