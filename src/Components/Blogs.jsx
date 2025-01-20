import Heading from "../Utilities/Heading";

// Blog data
const blogsData = [
    {
        id: 1,
        img: "https://i.ibb.co/mJJM7Nv/asasasasasasasasas.jpg",
        authorImg: "https://i.ibb.co/mJJM7Nv/asasasasasasasasas.jpg",
        authorName: "John Doe",
        country: "USA",
        date: "Jan 15, 2025",
        title: "Understanding Scholarships",
        details: "Learn the basics of scholarships and how they can help you achieve your academic goals.",
    },
    {
        id: 2,
        img: "https://i.ibb.co/fXGjHrW/assssssss.jpg",
        authorImg: "https://i.ibb.co/fXGjHrW/assssssss.jpg",
        authorName: "Jane Smith",
        country: "Canada",
        date: "Jan 14, 2025",
        title: "Top Scholarships for International Students",
        details: "A list of the best scholarships available for international students worldwide.",
    },
    {
        id: 3,
        img: "https://i.ibb.co/3cHcz3k/aaa.jpg",
        authorImg: "https://i.ibb.co/3cHcz3k/aaa.jpg",
        authorName: "Emily Brown",
        country: "UK",
        date: "Jan 13, 2025",
        title: "How to Apply for Scholarships",
        details: "Step-by-step guide on how to apply for scholarships effectively and maximize your chances.",
    },
];

const Blogs = () => {
    return (
        <div className="w-full h-full bg-gradient-to-b from-blue-50 via-teal-100 font-logoFont to-blue-50">
            <Heading one={"Blogs & Articles"} two={"Explore the latest articles and insights"}></Heading>
            <div className="w-11/12 mx-auto">
                {/* Blog cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogsData.map((blog) => (
                        <div
                            key={blog.id}
                            className="border rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
                        >
                            <img
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
                {/* Button to navigate to all blogs */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => (window.location.href = "/all_blogs")}
                        className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300"
                    >
                        View All Blogs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
