import Heading from "../Utilities/Heading";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is UniGrants?",
            answer: "UniGrants is a platform designed to help students find and apply for university scholarships globally.",
        },
        {
            question: "How do I create an account on UniGrants?",
            answer: "Click on the 'Register' button on the top right of the homepage and fill in the required information to create your account.",
        },
        {
            question: "Can I search for scholarships by country?",
            answer: "Yes, UniGrants allows you to filter scholarships by country, university, and field of study.",
        },
        {
            question: "How do I apply for a scholarship through UniGrants?",
            answer: "After finding a suitable scholarship, click on 'Apply Now' and follow the instructions provided by the university or scholarship provider.",
        },
        {
            question: "Is there a fee to use UniGrants?",
            answer: "No, UniGrants is completely free to use for students seeking scholarships.",
        },
        {
            question: "Can I save scholarships to review later?",
            answer: "Yes, you can save scholarships to your favorites by clicking the 'Save' button on the scholarship details page.",
        },
        {
            question: "Does UniGrants verify the authenticity of scholarships?",
            answer: "Yes, we ensure all listed scholarships are from verified and trusted sources to guarantee their authenticity.",
        },
        {
            question: "Can I edit my scholarship application after submission?",
            answer: "Once submitted, applications cannot be edited on UniGrants. Please ensure all details are correct before submitting.",
        },
        {
            question: "How do I contact support for help?",
            answer: "You can reach out to our support team via the 'Contact Us' page or email us directly for assistance.",
        },
        {
            question: "Can I track the status of my scholarship application?",
            answer: "Yes, you can track your application status from your dashboard under the 'My Applications' section.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full h-full font-logoFont">
            <Heading one={"FAQ"} two={"Frequently Asked Questions"}></Heading>
            <div className="w-11/12 mx-auto flex flex-col lg:flex-row  gap-10 ">
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2 h-full">
                    <img
                        src="https://i.ibb.co/BGGSrS0/dsdsdsd.png"
                        alt="FAQ Illustration"
                        className="w-full h-full object-cover rounded-lg "
                    />
                </div>

                {/* Right Side - Accordion */}
                <div className="w-full lg:w-1/2">
                    <div className="space-y-1">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border rounded-lg shadow-lg p-5 bg-transparent hover:bg-gray-50 transition duration-300"
                            >
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h3 className="text-lg font-semibold text-transparent bg-gradient-to-tr to-indigo-900 from-orange-800 bg-clip-text">{faq.question}</h3>
                                    {activeIndex === index ? (
                                        <FaChevronUp className="text-gray-600 text-lg" />
                                    ) : (
                                        <FaChevronDown className="text-gray-600 text-lg" />
                                    )}
                                </div>
                                {activeIndex === index && (
                                    <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
