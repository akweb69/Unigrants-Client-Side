import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
const Banner = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        fade: true,
    };
    const navigate = useNavigate()
    const handleNaviagte = () => {
        navigate("/all-scholarship")
    }
    return (
        <div className="w-full">
            <div className="w-full h-[80vh] ">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="">
                            <div className="w-full h-[80vh] flex justify-center flex-col bg-slider-01 items-center bg-center text-center bg-cover bg-no-repeat bg-[rgba(0,0,0,0.6)] bg-blend-overlay ">
                                <motion.h1
                                    initial={{ y: 80, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="text-4xl px-4 md:text-6xl lg:text-8xl text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto  font-extrabold font-logoFont py-4 animate-bounce">Find Your Dream Scholarship</motion.h1>

                                <motion.p
                                    initial={{ y: 130, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.9 }}
                                    className="md:text-xl font-semibold  text-transparent bg-gradient-to-l from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto  px-4">Explore scholarships that match your academic goals.</motion.p>

                                <div className="py-7 w-full">
                                    <motion.div
                                        initial={{ y: 130, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 1.5 }}
                                        className="w-11/12 md:w-1/3 mx-auto p-1 rounded-full border border-orange-500 mb-10">
                                        <div className="w-full flex justify-between items-center gap-1 flex-grow">
                                            <div className="px-2"><FaSearch className="text-orange-500 "></FaSearch> </div>
                                            <div className="flex-1"><input type="text" className="w-full outline-none bg-transparent border-0 text-white" placeholder="Search Scholaship by university , country ..." /></div>
                                            {/* btn */}
                                            <div
                                                onClick={() => handleNaviagte()}
                                                className="h-full flex justify-center items-center bg-orange-500 p-2 px-4 text-white rounded-full cursor-pointer">
                                                Search
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-full h-[80vh] flex justify-center flex-col bg-slider-02 items-center bg-center text-center bg-cover bg-no-repeat bg-[rgba(0,0,0,0.6)] bg-blend-overlay ">
                                <motion.h1
                                    initial={{ y: 0, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: 6 }}
                                    className="text-4xl px-4 md:text-6xl lg:text-8xl text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto  font-extrabold font-logoFont py-4">Achieve Excellence</motion.h1>

                                <motion.p
                                    initial={{ y: 80, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 6.3 }}
                                    className="md:text-xl font-semibold  text-transparent bg-gradient-to-l from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto  px-4">Turn your aspirations into achievements with the right funding.</motion.p>

                                <div className="py-7 w-full">
                                    <motion.div
                                        initial={{ y: 80, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 6.77 }}
                                        className="w-11/12 md:w-1/3 mx-auto p-1 rounded-full border border-orange-500 mb-10">
                                        <div className="w-full flex justify-between items-center gap-1 flex-grow">
                                            <div className="px-2"><FaSearch className="text-orange-500 "></FaSearch> </div>
                                            <div className="flex-1"><input type="text" className="w-full outline-none bg-transparent border-0 text-white" placeholder="Search Scholaship by university , country ..." /></div>
                                            {/* btn */}
                                            <div
                                                onClick={() => handleNaviagte()}
                                                className="h-full flex justify-center items-center bg-orange-500 p-2 px-4 text-white rounded-full cursor-pointer">
                                                Search
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-full h-[80vh] flex justify-center flex-col bg-slider-03 items-center bg-center text-center bg-cover bg-no-repeat bg-[rgba(0,0,0,0.6)] bg-blend-overlay ">
                                <h1 className="text-4xl px-4 md:text-6xl lg:text-8xl text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto  font-extrabold font-logoFont py-4">Apply Effortlessly</h1>

                                <p className="md:text-xl font-semibold  text-transparent bg-gradient-to-l from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto  px-4">Streamline your application process with UniGrants.</p>

                                <div className="py-7 w-full">
                                    <div className="w-11/12 md:w-1/3 mx-auto p-1 rounded-full border border-orange-500 mb-10">
                                        <div className="w-full flex justify-between items-center gap-1 flex-grow">
                                            <div className="px-2"><FaSearch className="text-orange-500 "></FaSearch> </div>
                                            <div className="flex-1"><input type="text" className="w-full outline-none text-white bg-transparent border-0" placeholder="Search Scholaship by university , country ..." /></div>
                                            {/* btn */}
                                            <div
                                                onClick={() => handleNaviagte()}
                                                className="h-full flex justify-center items-center bg-orange-500 p-2 px-4 text-white rounded-full cursor-pointer">
                                                Search
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default Banner;