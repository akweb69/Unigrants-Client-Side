import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const S_Card = ({ data }) => {



    const { _id, universityLogo, universityName, universityCountry, scholarshipName, universityCity, scholarshipCategory, subjectCategory, applicationDeadline, applicationFees, ratings } = data

    const [rate, setRate] = useState(0)

    useEffect(() => {

        const total = ratings.reduce((sum, rating) => sum + rating, 0);
        const average = parseFloat(total / ratings.length).toFixed(1);
        if (ratings.length === 0) {
            setRate(0.0)
        }
        else {
            setRate(average)
        }

        console.log("Average Rating:", average);
    }, [ratings]);


    return (
        <motion.div
            initial={{ y: -60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full border h-full p-4 rounded-xl flex flex-col justify-between hover:shadow-md bg-white">
            <div className="">
                <div className="flex items-center gap-2">
                    <img className="w-14 h-14 rounded-full" src={universityLogo} alt="" />
                    <div className="flex-1">
                        <p className="text-xl md:text-2xl font-bold font-logoFont">{universityName}</p>
                        <p className="font-logoFont text-sm">{universityCity} , {universityCountry}</p>
                    </div>
                </div>

                <div className="py-2">
                    <p className="text-xl md:text-2xl font-bold font-logoFont text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text ">{scholarshipName}</p>
                    <p className="font-secondary  font-semibold">{scholarshipCategory} | {subjectCategory}</p>
                    <div className="flex md:justify-between flex-col md:flex-row md:items-center md:gap-4">
                        <p className=" font-bold font-logoFont text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text">Deadline : {applicationDeadline}</p>
                        <p className="md:text-xl font-bold font-logoFont text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text">Fees : ${applicationFees}</p>
                    </div>
                    <p className="font-logoFont md:text-xl font-bold text-orange-500">Rating: {rate} / 5.0</p>
                </div>
            </div>
            {/* button */}
            <div className="w-full text-center pt-5 pb-1 ">
                <Link className="w-full inline-block p-3 text-center border rounded-lg bg-gradient-to-tr from-orange-500 to-orange-500 hover:from-orange-500 hover:to-fuchsia-500 text-white font-logoFont text-base md:text-lg" to={`/s-details/${_id}`}> Scholarship Details</Link>
            </div>
        </motion.div>
    );
};

export default S_Card;