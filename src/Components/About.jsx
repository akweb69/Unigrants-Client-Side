import React from "react";
import { motion } from "framer-motion";
import Heading from "../Utilities/Heading";

const About = () => {
    return (
        <div className="w-full  font-logoFont pb-14 ">
            <Heading one={"About Us"} two={" UniGrants is a platform dedicated to helping students achieve their academic dreams."}></Heading>
            {/* Main Container */}
            <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center gap-8">
                {/* Image Section */}
                <motion.div
                    className="w-full lg:w-1/2 h-full"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src="https://i.ibb.co/RNG4pfq/asasasasas.jpg"
                        alt="About Us"
                        className="rounded-lg object-cover mx-auto "
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="w-full lg:w-1/2 text-justify lg:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-4 text-teal-500">
                        UniGrants
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        UniGrants is a platform dedicated to helping students achieve their academic dreams.
                        Our mission is to simplify the scholarship application process, making education
                        accessible to everyone, everywhere.
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                        With advanced search tools, personalized recommendations, and a user-friendly interface,
                        UniGrants bridges the gap between students and opportunities. Our platform leverages
                        cutting-edge algorithms to help students find scholarships that are tailored to their
                        qualifications, interests, and financial needs. Whether you're looking for merit-based,
                        need-based, or field-specific scholarships, we provide you with a one-stop-shop to discover
                        all available options.
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                        Beyond just finding scholarships, UniGrants also offers additional features to ensure the
                        application process is seamless and stress-free. From tracking application deadlines to
                        providing document templates, our platform is designed to guide students every step of the
                        way. We are committed to empowering students with the knowledge and resources they need to
                        succeed in their educational journey.
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                        Join us in creating a world where financial barriers are no longer a hurdle to success.
                        We are passionate about transforming the way students approach their academic aspirations.
                        Together, we can help students not only dream big but achieve their goals, without the
                        constraint of finances.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
