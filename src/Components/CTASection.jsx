import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
    return (
        <div className="w-full bg-gradient-to-r from-blue-500 to-teal-500 py-16 px-6 text-white text-center">
            {/* Section Heading */}
            <motion.h2
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Start Your Scholarship Journey Today!
            </motion.h2>

            {/* Subheading */}
            <motion.p
                className="text-lg mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Unlock opportunities to pursue your dreams. Explore, apply, and achieve academic excellence with UniGrants.
            </motion.p>

            {/* Buttons */}
            <motion.div
                className="flex justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Link
                    to={"/all-scholarship"}
                    className="bg-white text-teal-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300 animate-bounce"
                >
                    Register Now
                </Link>
                <Link
                    to={"/about"}
                    className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-500 transition duration-300 animate-bounce"
                >
                    Learn More
                </Link>
            </motion.div>
        </div>
    );
};

export default CTASection;
