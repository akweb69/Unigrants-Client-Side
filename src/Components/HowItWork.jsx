import React from "react";
import { motion } from "framer-motion";
import { FaRegUser, FaSearch, FaCheckCircle, FaFileAlt, FaRegHandshake, FaCreditCard } from "react-icons/fa";
import Heading from "../Utilities/Heading";

const HowItWork = () => {
    return (
        <div className="w-full bg-gradient-to-b from-blue-50 via-teal-100 font-logoFont to-blue-50 text-gray-800">
            <Heading one={"How It Works"}
                two={"Learn the steps to get started with UniGrants"}></Heading>

            <div className="w-11/12 mx-auto">

                {/* Timeline Section */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-teal-500 to-blue-400 h-full"></div>

                    {/* Step 1 (Left Side) */}
                    <motion.div
                        className="flex items-center mb-14 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-1/2 text-right pr-8">
                            <h3 className="text-xl font-bold">Step 1: Register</h3>
                            <p className="text-sm text-gray-600">
                                Create an account on UniGrants to get started with your scholarship journey. All you need is a valid email address to register.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaRegUser size={20} />
                        </div>
                        <div className="w-1/2"></div>
                    </motion.div>

                    {/* Step 2 (Right Side) */}
                    <motion.div
                        className="flex items-center mb-14 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="w-1/2"></div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaSearch size={20} />
                        </div>
                        <div className="w-1/2 text-left pl-8">
                            <h3 className="text-xl font-bold">Step 2: Find Scholarships</h3>
                            <p className="text-sm text-gray-600">
                                Browse through a variety of scholarships using filters that match your profile and academic goals. Make informed decisions to apply.
                            </p>
                        </div>
                    </motion.div>

                    {/* Step 3 (Left Side) */}
                    <motion.div
                        className="flex items-center mb-14 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="w-1/2 text-right pr-8">
                            <h3 className="text-xl font-bold">Step 3: Apply</h3>
                            <p className="text-sm text-gray-600">
                                Fill out the application forms for the scholarships you're interested in and submit them directly through the platform.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaCheckCircle size={20} />
                        </div>
                        <div className="w-1/2"></div>
                    </motion.div>

                    {/* Step 4: Make Payment (Right Side) */}
                    <motion.div
                        className="flex items-center mb-14 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="w-1/2"></div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-purple-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaCreditCard size={20} />
                        </div>
                        <div className="w-1/2 text-left pl-8">
                            <h3 className="text-xl font-bold">Step 4: Make Payment</h3>
                            <p className="text-sm text-gray-600">
                                After submitting your application, proceed to pay any necessary application fees. Payment can be made securely via our platform.
                            </p>
                        </div>
                    </motion.div>

                    {/* Step 5 (Left Side) */}
                    <motion.div
                        className="flex items-center pb-14 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <div className="w-1/2 text-right pr-8">
                            <h3 className="text-xl font-bold">Step 5: Get Matched</h3>
                            <p className="text-sm text-gray-600">
                                After applying, you'll be notified when your applications are shortlisted. Stay updated on the status and next steps.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaRegHandshake size={20} />
                        </div>
                        <div className="w-1/2"></div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default HowItWork;
