import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Toaster } from "react-hot-toast";

const HomeLayout = () => {
    const [showScroll, setShowScroll] = useState(false);

    // Handle scroll event to show/hide the "Back to Top" button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <Toaster />
            <Navbar />
            <div className="min-h-screen w-full">
                <Outlet />
            </div>
            <Footer />

            {/* Back to Top Button */}
            {showScroll && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-teal-700 text-white px-4 py-2 text-xl rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transition duration-300"
                    aria-label="Back to Top"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default HomeLayout;
