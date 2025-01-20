import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthContext/AuthProvider";
import axios from "axios";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const A_AddScholarship = () => {
    const { register, handleSubmit, reset } = useForm()
    const { user } = useContext(AuthContext);
    const imgbb_api_hosting_key = import.meta.env.VITE_IMGBB_API_KEY
    const [isLoading, setIsloading] = useState(false)
    const date = new Date()
    const today = date.toLocaleDateString()
    const email = user?.email;
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        setIsloading(true)
        const scholarshipData = { ...data, postedUserEmail: email, scholarshipPostDate: today, ratings: [] }
        const deadline = new Date(data.applicationDeadline).toLocaleDateString("en-US");
        // ! upload image on imgbb hosting site
        // Create FormData for each file
        const formData1 = new FormData();
        const formData2 = new FormData();
        formData1.append("image", data.universityLogo[0]);
        formData2.append("image", data.universityImage[0]);

        // Upload the university logo
        const res1 = await axios.post(
            `https://api.imgbb.com/1/upload?key=${imgbb_api_hosting_key}`,
            formData1,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        // Upload the university image
        const res2 = await axios.post(
            `https://api.imgbb.com/1/upload?key=${imgbb_api_hosting_key}`,
            formData2,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        //  get the url for logo and image 
        const logoUrl = res1.data.data.display_url;
        const imageUrl = res2.data.data.display_url;

        // Add the URLs to your scholarship data
        const completeScholarshipData = {
            ...scholarshipData,
            universityLogo: logoUrl,
            universityImage: imageUrl,
            applicationDeadline: deadline,
        };
        console.log(completeScholarshipData)

        //!_________Post the data on database__________
        axiosPublic.post("/add_Scholarship", completeScholarshipData)
            .then(res => {
                const data = res.data;
                toast.success("Your Scholarship Added successfully!")
                setIsloading(false)
                reset()
            })
            .catch(err => {
                console.log(err)
                setIsloading(false)
                toast.error("Something Went Wrong Try Again letter ")
            })

    }

    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
        "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
        "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
        "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde",
        "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
        "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica",
        "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark",
        "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia",
        "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
        "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
        "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
        "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
        "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
        "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
        "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
        "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
        "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia",
        "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
        "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
        "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
        "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
        "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
        "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
        "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
        "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan",
        "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania",
        "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
        "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
        "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
        "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    return (
        <div className="w-full py-6 md:py-14">
            <h1 className="text-2xl md:text-4xl font-logoFont font-extrabold text-transparent 
                    bg-gradient-to-tr from-orange-500 mb-4 to-fuchsia-500 bg-clip-text  w-fit mx-auto px-4">_Add Scholarship_</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-11/12 mx-auto md:grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0 bg-white p-4 rounded-xl">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">University Name</span>
                        </div>
                        <input required {...register("universityName")} type="text" placeholder="University Name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Scholarship Name</span>
                        </div>
                        <input required {...register("scholarshipName")} type="text" placeholder="Scholarship Name" className="input input-bordered w-full " />
                    </label>
                    {/* country */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Pick University Country</span>
                        </div>
                        <select required {...register("universityCountry")} className="select select-bordered">
                            {countries.map((country, index) => (
                                <option key={index} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </label>
                    {/* city */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">University City</span>
                        </div>
                        <input required {...register("universityCity")} type="text" placeholder="University City" className="input input-bordered w-full " />
                    </label>
                    {/* rank */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">University World Rank</span>
                        </div>
                        <input required {...register("universityWorldRank")} type="number" placeholder="University World Rank" className="input input-bordered w-full " />
                    </label>
                    {/* subject  */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Subject Category</span>
                        </div>
                        <select required {...register("subjectCategory")} className="select select-bordered">

                            <option value="Agriculture">Agriculture</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Doctor">Doctor</option>

                        </select>
                    </label>
                    {/* scholarship category */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Scholarship Category</span>
                        </div>
                        <select required defaultValue="Full Fund" {...register("scholarshipCategory")} className="select select-bordered">

                            <option value="Full Fund">Full Fund</option>
                            <option value="Partial">Partial</option>
                            <option value="Self Fund">Self Fund</option>

                        </select>
                    </label>
                    {/* degree */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Degree</span>
                        </div>
                        <select required defaultValue="Bachelor" {...register("degree")} className="select select-bordered">
                            <option value="Diploma">Diploma</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Masters">Masters</option>
                        </select>
                    </label>
                    {/* tution fees */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Tution Fees</span>
                        </div>
                        <input required {...register("tuitionFees")} type="number" placeholder="Tution Fees" className="input input-bordered w-full " />
                    </label>
                    {/* application fees */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Application Fees</span>
                        </div>
                        <input required {...register("applicationFees")} type="number" placeholder="Application Fees" className="input input-bordered w-full " />
                    </label>
                    {/* service charge */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Service Charge</span>
                        </div>
                        <input required     {...register("serviceCharge")} type="number" placeholder="Service Charge" className="input input-bordered w-full " />
                    </label>
                    {/* deadline */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Deadline</span>
                        </div>
                        <input required {...register("applicationDeadline")} type="date" placeholder="Deadline" className="input input-bordered w-full " />
                    </label>
                    {/* description */}
                    <label className="form-control w-full col-span-2">
                        <div className="label">
                            <span className="label-text">Description</span>
                        </div>
                        <textarea required {...register("scholarshipDescription")} className="textarea textarea-bordered h-24" placeholder="Write the scholarship description..."></textarea>
                    </label>
                    {/* image and logos */}
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">University Logo</span>
                        </div>
                        <input {...register("universityLogo")} type="file" className="file-input file-input-warning file-input-bordered w-full " />
                    </label>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">University Image</span>
                        </div>
                        <input {...register("universityImage")} type="file" className="file-input file-input-bordered file-input-warning w-full " />
                    </label>
                </div>

                {/* button submit */}
                <div className="w-11/12 mx-auto mt-5">
                    <button
                        className="w-full text-center py-3 text-white text-xl font-logoFont font-semibold bg-orange-500 rounded-lg hover:bg-orange-400 active:bg-orange-700 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-y-105 active:scale-95 border-2 border-orange-600 hover:border-orange-400"
                    >
                        {isLoading ? <div className="w-full h-full flex gap-2 justify-center items-center ">
                            <p className="text-white">Processing...</p>
                            <span className="loading loading-bars loading-md text-accent"></span>
                        </div> : "Add New Scholarship"}
                    </button>

                </div>
            </form >

        </div >
    );
};

export default A_AddScholarship;