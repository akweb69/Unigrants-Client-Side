import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            // Here you would typically send the email to your backend for processing
            setMessage("Thank you for subscribing!");
            setEmail(""); // Clear input after submission
        } else {
            setMessage("Please enter a valid email.");
        }
    };

    return (
        <footer className="bg-gray-900 text-gray-300 py-10 w-full font-logoFont ">
            {/* Footer Content */}
            <div className="w-11/12 mx-auto grid gap-8 md:grid-cols-4">
                {/* Column 1: Logo and Description */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">UniGrants</h2>
                    <p className="text-gray-400">
                        UniGrants helps students discover scholarships and universities that fit their needs. Start your journey to higher education with us!
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-teal-400 transition duration-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/scholarships" className="hover:text-teal-400 transition duration-300">
                                Scholarships
                            </Link>
                        </li>
                        <li>
                            <Link to="/universities" className="hover:text-teal-400 transition duration-300">
                                Universities
                            </Link>
                        </li>
                        <li>
                            <Link to="/apply" className="hover:text-teal-400 transition duration-300">
                                Apply Now
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Contact Information */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Contact Us</h3>
                    <p className="text-gray-400">Dhaka, Bangladesh</p>
                    <p className="text-gray-400">+880 1768037870</p>
                    <p className="text-gray-400">akwebdev69@gmail.com</p>
                </div>

                {/* Column 4: Social Media */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="bg-gray-700 text-white p-3 rounded-full hover:bg-teal-500 transition duration-300"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="bg-gray-700 text-white p-3 rounded-full hover:bg-teal-500 transition duration-300"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="bg-gray-700 text-white p-3 rounded-full hover:bg-teal-500 transition duration-300"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href="#"
                            className="bg-gray-700 text-white p-3 rounded-full hover:bg-teal-500 transition duration-300"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            {/* Newsletter Subscription Section */}
            <div className="bg-gray-800 text-gray-300 py-6 px-4 mt-10">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-gray-400 mb-6">Get the latest updates on scholarships and universities directly in your inbox.</p>

                    <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-2">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-md text-gray-900 w-64"
                            required
                        />
                        <button type="submit" className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-400 transition duration-300">
                            Subscribe
                        </button>
                    </form>

                    {message && (
                        <p className={`mt-4 ${message === "Thank you for subscribing!" ? "text-teal-500" : "text-red-500"}`}>
                            {message}
                        </p>
                    )}
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} UniGrants. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
