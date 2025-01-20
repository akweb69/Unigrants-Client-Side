import Heading from "../Utilities/Heading";
import Marquee from "react-fast-marquee";
const Colaborate = () => {

    const collaborations = [
        {
            university_name: "Harvard University",
            logo: "https://i.ibb.co/qdrLTfs/images-removebg-preview-1.png",
            location: "Cambridge, USA"
        },
        {
            university_name: "Stanford University",
            logo: "https://i.ibb.co/25DnjXh/block-s-right.webp",
            location: "Stanford, USA"
        },
        {
            university_name: "University of Oxford",
            logo: "https://i.ibb.co/KjWKCpX/Oxford-University-Circlet-svg.png",
            location: "Oxford, UK"
        },
        {
            university_name: "Massachusetts Institute of Technology (MIT)",
            logo: "https://i.ibb.co/JyXcPwb/images-1-removebg-preview.png",
            location: "Cambridge, USA"
        },
        {
            university_name: "University of Cambridge",
            logo: "https://i.ibb.co/kSvG5WC/stock-vector-university-of-cambridge-logo-cambridge-vector-logo-1845651232-removebg-preview.png",
            location: "Cambridge, UK"
        },
        {
            university_name: "University of California, Berkeley",
            logo: "https://i.ibb.co/W08CSVC/images-1-removebg-preview-1.png",
            location: "Berkeley, USA"
        },
        {
            university_name: "Princeton University",
            logo: "https://i.ibb.co/brvfsXx/1274-princeton-university-seal-removebg-preview.png",
            location: "Princeton, USA"
        },
        {
            university_name: "Yale University",
            logo: "https://i.ibb.co/GMNVZkv/png-transparent-yale-logo-school-university-removebg-preview.png",
            location: "New Haven, USA"
        },
        {
            university_name: "University of Tokyo",
            logo: "https://i.ibb.co/RH3NW2T/the-university-of-tokyo-logo-png-seeklogo-508692.png",
            location: "Tokyo, Japan"
        },
        {
            university_name: "ETH Zurich",
            logo: "https://i.ibb.co/GQcWf5s/images-2-removebg-preview.png",
            location: "Zurich, Switzerland"
        }
    ];

    return (
        <div className="w-full  bg-gradient-to-b from-blue-50 via-teal-100 font-logoFont to-blue-50">
            <Heading one={"Our Trusted Collaborators"} two={"We are proud to partner with leading organizations and businesses to deliver exceptional solutions."}></Heading>
            <div className="w-11/12 mx-auto">
                <Marquee speed={100} gradientWidth={200} gradientColor="white">
                    {
                        collaborations.map((hi, idx) => <div className="" key={idx}>
                            <div className="p-4 rounded-lg font-logoFont  flex gap-4 items-center">
                                <img src={hi.logo} className="md:w-28 md:h-28 w-16 h-16 object-cover" alt="" />
                                <div className="pb-3">
                                    <p className="md:text-2xl text-xl font-bold text-teal-500">{hi.university_name}</p>
                                    <p className="text-xs md:text-sm">{hi.location}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Colaborate;