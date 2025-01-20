import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaSearch, FaInfoCircle, FaCreditCard, FaRegHandshake, FaRegListAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import Heading from "../Utilities/Heading";

const HowToApply = () => {
    return (
        <div className="w-full bg-gradient-to-b from-teal-50 via-blue-100 to-blue-50 font-logoFont ">
            <Heading
                one={"How To Apply"}
                two={"Follow these simple steps to successfully apply for scholarships and get your dream education."}
            />

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
                                Create a free account on UniGrants to start your scholarship application process.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaUser size={20} />
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
                                Use our advanced search tools to find the perfect scholarships based on your profile.
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
                            <h3 className="text-xl font-bold">Step 3: See Details</h3>
                            <p className="text-sm text-gray-600">
                                View all the scholarship details, eligibility criteria, and application deadlines.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaInfoCircle size={20} />
                        </div>
                        <div className="w-1/2"></div>
                    </motion.div>

                    {/* Step 4 (Right Side) */}
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
                            <h3 className="text-xl font-bold">Step 4: Payment Checkout</h3>
                            <p className="text-sm text-gray-600">
                                Complete the payment process for application fees (if applicable).
                            </p>
                        </div>
                    </motion.div>

                    {/* Step 5 (Left Side) */}
                    <motion.div
                        className="flex items-center mb-14 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <div className="w-1/2 text-right pr-8">
                            <h3 className="text-xl font-bold">Step 5: Provide Information</h3>
                            <p className="text-sm text-gray-600">
                                Fill in necessary personal and academic information for your application.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaRegListAlt size={20} />
                        </div>
                        <div className="w-1/2"></div>
                    </motion.div>

                    {/* Step 6 (Right Side) */}
                    <motion.div
                        className="flex items-center mb-14 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                        <div className="w-1/2"></div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaCheckCircle size={20} />
                        </div>
                        <div className="w-1/2 text-left pl-8">
                            <h3 className="text-xl font-bold">Step 6: Apply</h3>
                            <p className="text-sm text-gray-600">
                                Submit your application after providing all required information.
                            </p>
                        </div>
                    </motion.div>

                    {/* Step 7 (Left Side) */}
                    <motion.div
                        className="flex items-center mb-14 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <div className="w-1/2 text-right pr-8">
                            <h3 className="text-xl font-bold">Step 7: Waiting for Feedback</h3>
                            <p className="text-sm text-gray-600">
                                Wait for feedback from the scholarship committee about your application.
                            </p>
                        </div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaClock size={20} />
                        </div>
                        <div className="w-1/2"></div>
                    </motion.div>

                    {/* Step 8 (Right Side) */}
                    <motion.div
                        className="flex items-center mb-14 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                    >
                        <div className="w-1/2"></div>
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                            <FaCheckCircle size={20} />
                        </div>
                        <div className="w-1/2 text-left pl-8">
                            <h3 className="text-xl font-bold">Step 8: Submit According to Feedback</h3>
                            <p className="text-sm text-gray-600">
                                Submit any additional documents or follow instructions based on the feedback.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default HowToApply;
