import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-teal-100 text-gray-800">
            <h1 className="text-9xl font-extrabold text-teal-500 mb-6">404</h1>
            <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-lg mb-8">
                Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition duration-300"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
