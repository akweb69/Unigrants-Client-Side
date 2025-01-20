import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';
import Heading from '../Utilities/Heading';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="w-full bg-gradient-to-b from-blue-50 via-teal-100 to-blue-50 font-logoFont">
            <Heading
                one={"Contact Us"}
                two={"We would love to hear from you! Fill out the form below to get in touch with us."}
            />
            <div className="w-11/12 mx-auto">
                <div className="grid w-full lg:grid-cols-2 gap-16">
                    {/* Left Column - Image */}
                    <div className="flex w-full justify-center items-center">
                        <img
                            src="https://i.ibb.co/VMSvg8r/pexels-necip-duman-3299706-13702503.jpg"
                            alt="Contact Us"
                            className="rounded-lg w-full max-h-[750px] object-cover"
                        />
                    </div>

                    {/* Right Column - Form */}
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold text-teal-600 mb-6 text-center">Feel Free To Send</h2>
                        <p className="text-lg text-gray-700 mb-8 text-center">
                            We would love to hear from you! Fill out the form below to get in touch with us.
                        </p>

                        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-600 font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="bg-teal-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300">
                                    Send Message
                                </button>
                            </div>
                        </form>

                        {/* Contact Information */}
                        <div className="mt-8 text-center">
                            <p className="text-gray-600 text-lg font-semibold mb-4">You can also reach us via:</p>
                            <div className="flex flex-col space-y-4 justify-center ">
                                <div className='flex  gap-4  items-center'>
                                    <FaPhoneAlt size={30} className="text-teal-500" />
                                    <p className="text-gray-600">+880 1768037870</p>
                                </div>
                                <div className='flex  gap-4  items-center'>
                                    <FaEnvelope size={30} className="text-teal-500" />
                                    <p className="text-gray-600">akwebdev69@gmail.com</p>
                                </div>
                                <div className='flex  gap-4  items-center'>
                                    <FaLocationArrow size={30} className="text-teal-500" />
                                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
