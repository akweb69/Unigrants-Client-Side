import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
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
    return (
        <div className="w-full">
            <div className="w-full h-[80vh] ">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="">
                            <div className="w-full h-[80vh] flex justify-center flex-col bg-slider-01 items-center bg-center text-center bg-cover bg-no-repeat bg-[rgba(0,0,0,0.6)] bg-blend-overlay ">
                                <h1 className="text-4xl px-4 md:text-6xl lg:text-8xl text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto  font-extrabold font-secondary py-4">Find Your Dream Scholarship</h1>

                                <p className="md:text-xl font-semibold  text-transparent bg-gradient-to-l from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto  px-4">Explore scholarships that match your academic goals.</p>

                                <div className="py-7 w-full">
                                    <div className="relative w-11/12 mx-auto border max-w-xl h-14 rounded-full flex items-center shadow-lg">
                                        {/* Left Icon */}
                                        <div className="pl-4 text-gray-500">
                                            <FaSearch size={20} />
                                        </div>

                                        {/* Input Field */}
                                        <input
                                            type="text"
                                            placeholder="Search for scholarships, universities..."
                                            className="flex-1 h-full px-4 outline-none text-orange-700 bg-transparent rounded-l-full"
                                        />

                                        {/* Right Button */}
                                        <div className="pr-2">
                                            <Link
                                                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md flex items-center justify-center"
                                                to="/"
                                            >
                                                <span className="hidden sm:block">Search</span>
                                                <FaSearch className="block sm:hidden" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-full h-[80vh] flex justify-center flex-col bg-slider-02 items-center bg-center text-center bg-cover bg-no-repeat bg-[rgba(0,0,0,0.6)] bg-blend-overlay ">
                                <h1 className="text-4xl px-4 md:text-6xl lg:text-8xl text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto  font-extrabold font-secondary py-4">Achieve Excellence</h1>

                                <p className="md:text-xl font-semibold  text-transparent bg-gradient-to-l from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto  px-4">Turn your aspirations into achievements with the right funding.</p>

                                <div className="py-7 w-full">
                                    <div className="relative w-11/12 mx-auto border max-w-xl h-14 rounded-full flex items-center shadow-lg">
                                        {/* Left Icon */}
                                        <div className="pl-4 text-gray-500">
                                            <FaSearch size={20} />
                                        </div>

                                        {/* Input Field */}
                                        <input
                                            type="text"
                                            placeholder="Search for scholarships, universities..."
                                            className="flex-1 h-full px-4 outline-none text-orange-700 bg-transparent rounded-l-full"
                                        />

                                        {/* Right Button */}
                                        <div className="pr-2">
                                            <Link
                                                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md flex items-center justify-center"
                                                to="/"
                                            >
                                                <span className="hidden sm:block">Search</span>
                                                <FaSearch className="block sm:hidden" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-full h-[80vh] flex justify-center flex-col bg-slider-03 items-center bg-center text-center bg-cover bg-no-repeat bg-[rgba(0,0,0,0.6)] bg-blend-overlay ">
                                <h1 className="text-4xl px-4 md:text-6xl lg:text-8xl text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto  font-extrabold font-secondary py-4">Apply Effortlessly</h1>

                                <p className="md:text-xl font-semibold  text-transparent bg-gradient-to-l from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto  px-4">Streamline your application process with UniGrants.</p>

                                <div className="py-7 w-full">
                                    <div className="relative w-11/12 mx-auto border max-w-xl h-14 rounded-full flex items-center shadow-lg">
                                        {/* Left Icon */}
                                        <div className="pl-4 text-gray-500">
                                            <FaSearch size={20} />
                                        </div>

                                        {/* Input Field */}
                                        <input
                                            type="text"
                                            placeholder="Search for scholarships, universities..."
                                            className="flex-1 h-full px-4 outline-none text-orange-700 bg-transparent rounded-l-full"
                                        />

                                        {/* Right Button */}
                                        <div className="pr-2">
                                            <Link
                                                className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md flex items-center justify-center"
                                                to="/"
                                            >
                                                <span className="hidden sm:block">Search</span>
                                                <FaSearch className="block sm:hidden" />
                                            </Link>
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