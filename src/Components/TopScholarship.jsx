import useScholarship from "../Hooks/useScholarship";
import Heading from "../Utilities/Heading";
import S_Card from "../Utilities/S_Card";
import { Link } from "react-router-dom";

const TopScholarship = () => {
    const [scholarship] = useScholarship()

    return (
        <div className="w-full bg-gradient-to-b from-blue-50 via-teal-100 font-logoFont to-blue-50">
            <Heading one={"Top Scholarship"} two={"Explore the Best Scholarships Tailored to Your Dreams and Goals."}></Heading>
            {/* main content */}
            <div className="w-11/12 mx-auto">
                <div className="w-full md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-5 md:space-y-0 ">
                    {
                        scholarship?.slice(0, 6).map((item, idx) => <S_Card data={item} key={idx}></S_Card>)
                    }
                </div>
                <div className=" mt-10 text-center">
                    <Link to={"/all-scholarship"} className="btn btn-warning text-white bg-orange-500">
                        All Scholarship
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default TopScholarship;