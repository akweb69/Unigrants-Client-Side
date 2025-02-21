import { motion } from "framer-motion";
const Heading = ({ one, two }) => {

    return (
        <div className="w-full py-12">
            <div className="w-11/12 mx-auto">
                <motion.h1
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-3xl md:text-5xl font-logoFont font-extrabold text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 text-center bg-clip-text w-fit mx-auto py-2">{one}</motion.h1>
                <motion.p
                    initial={{ y: -60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-gray-400 text-center md:w-2/3 lg:w-1/2 mx-auto">
                    {two}
                </motion.p>
            </div>
        </div>
    );
};

export default Heading;