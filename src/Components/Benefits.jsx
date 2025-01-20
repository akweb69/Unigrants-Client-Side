import React from "react";
import { motion } from "framer-motion";
import { FaRegClock, FaAward, FaUserGraduate, FaUniversity } from "react-icons/fa";
import Heading from "../Utilities/Heading";

const Benefits = () => {
    return (
        <div className="w-full bg-gradient-to-b from-blue-50 via-teal-100 font-logoFont to-blue-50">
            <Heading
                one={"Benefits of Using UniGrants"}
                two={"Discover how UniGrants simplifies the scholarship application process and helps you achieve your academic goals."}
            />
            <div className="w-11/12 mx-auto text-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Benefit 1 */}
                    <motion.div
                        className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-teal-50"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-teal-500 mb-4">
                            <FaRegClock size={30} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Time-Saving</h3>
                        <p className="text-sm text-gray-600 text-center">
                            Quickly find scholarships matching your profile and apply directly from the platform, saving valuable time.
                        </p>
                    </motion.div>

                    {/* Benefit 2 */}
                    <motion.div
                        className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-teal-50"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="text-teal-500 mb-4">
                            <FaAward size={30} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Merit-Based Scholarships</h3>
                        <p className="text-sm text-gray-600 text-center">
                            Access a wide range of merit-based scholarships tailored to your academic achievements.
                        </p>
                    </motion.div>

                    {/* Benefit 3 */}
                    <motion.div
                        className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-teal-50"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="text-teal-500 mb-4">
                            <FaUserGraduate size={30} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Recommendations</h3>
                        <p className="text-sm text-gray-600 text-center">
                            Receive personalized scholarship recommendations based on your academic profile and preferences.
                        </p>
                    </motion.div>

                    {/* Benefit 4 */}
                    <motion.div
                        className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-teal-50"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="text-teal-500 mb-4">
                            <FaUniversity size={30} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Reach</h3>
                        <p className="text-sm text-gray-600 text-center">
                            Find scholarships from universities and institutions around the world, making it easier to pursue your education.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
