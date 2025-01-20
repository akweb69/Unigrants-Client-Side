import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for submitting email goes here
        console.log("Email submitted:", email);
    };

    return (
        <div className="bg-gradient-to-r mt-14 from-blue-500 to-purple-600 text-white py-16 px-4">
            <div className="max-w-lg mx-auto text-center">
                {/* Title with gradient color */}
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">
                    Subscribe to Our Newsletter
                </h2>
                <p className="mt-4 text-lg text-gray-200">
                    Stay updated with the latest news, blogs, and offers.
                </p>

                <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-4 mt-8">
                    {/* Input field with a clean, modern look */}
                    <div className="relative">
                        <input
                            type="email"
                            className="p-4 pl-10 rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white text-black"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {/* React icon inside the input */}
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                    {/* Subscribe button */}
                    <button
                        type="submit"
                        className="bg-yellow-500 text-white py-3 px-6 rounded-md font-medium hover:bg-yellow-600 transition-all duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
