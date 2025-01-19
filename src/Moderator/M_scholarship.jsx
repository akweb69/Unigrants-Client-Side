import { FaDeleteLeft } from "react-icons/fa6";
import useAll_Schol from "../Hooks/useAll_Schol";
import Heading from "../Utilities/Heading";
import { MdOutlineDescription } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthContext/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const M_scholarship = () => {
    const [scholarship, refetch] = useAll_Schol();
    const [editModal, setEditModal] = useState(false);
    const [defaultValue, setDefaultValue] = useState({})

    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const date = new Date()
    const today = date.toLocaleDateString()
    const email = user?.email;
    const axiosPublic = useAxiosPublic();


    const onSubmit = async (data) => {

        const scholarshipData = { ...data, postedUserEmail: email, scholarshipPostDate: today }
        const deadline = new Date(data.applicationDeadline).toLocaleDateString("en-US");


        // Add the URLs to your scholarship data
        const completeScholarshipData = {
            ...scholarshipData,
            applicationDeadline: deadline,
        };


        //!_________Post the data on database__________
        axiosPublic.patch(`/scholarship_update/?id=${defaultValue?._id}`, completeScholarshipData)
            .then(res => {
                const data = res.data;
                toast.success("Save Your Update successfully!")
                console.log("from update---> ", data)
                setEditModal(false)
                refetch()
            })
            .catch(err => {
                console.log(err)
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
    // handle edite btn functionality
    const handleEditBtn = (id) => {
        const defaultData = scholarship.filter(hi => hi._id === id)[0];
        setDefaultValue(defaultData);
        setEditModal(true)

    }
    // delete                       
    const handleDelte = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`delete_scholarship/?id=${id}`)
                    .then(res => {
                        const data = res.data;
                        if (data.deletedCount > 0) {
                            refetch()

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }

    return (
        <div className="w-full min-h-screen ">
            {
                editModal && (
                    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm flex justify-center items-center">
                        <div className="w-11/12 md:w-8/12 lg:w-8/12 xl:w-9/12 bg-white rounded-xl shadow-lg p-6 md:p-10 overflow-y-scroll max-h-[80vh]">
                            <h1 className="text-2xl md:text-3xl font-bold text-center text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text mb-6">
                                Edit Scholarship
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="w-11/12 mx-auto md:grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0 bg-white p-4 rounded-xl">
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">University Name</span>
                                        </div>
                                        <input
                                            defaultValue={defaultValue?.universityName}
                                            required {...register("universityName")} type="text" placeholder="University Name" className="input input-bordered w-full " />
                                    </label>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Scholarship Name</span>
                                        </div>
                                        <input
                                            defaultValue={defaultValue?.scholarshipName}
                                            required {...register("scholarshipName")} type="text" placeholder="Scholarship Name" className="input input-bordered w-full " />
                                    </label>
                                    {/* country */}
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Pick University Country</span>
                                        </div>
                                        <select
                                            defaultValue={defaultValue?.universityCountry}
                                            required {...register("universityCountry")} className="select select-bordered">
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
                                        <input
                                            defaultValue={defaultValue?.universityCity}
                                            required {...register("universityCity")} type="text" placeholder="University City" className="input input-bordered w-full " />
                                    </label>
                                    {/* rank */}
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">University World Rank</span>
                                        </div>
                                        <input
                                            defaultValue={defaultValue?.universityWorldRank}
                                            required {...register("universityWorldRank")} type="number" placeholder="University World Rank" className="input input-bordered w-full " />
                                    </label>
                                    {/* subject  */}
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Subject Category</span>
                                        </div>
                                        <select
                                            defaultValue={defaultValue?.subjectCategory}
                                            required {...register("subjectCategory")} className="select select-bordered">

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
                                        <select
                                            defaultValue={defaultValue?.scholarshipCategory}
                                            required  {...register("scholarshipCategory")} className="select select-bordered">

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
                                        <select
                                            defaultValue={defaultValue?.degree}
                                            required  {...register("degree")} className="select select-bordered">
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
                                        <input
                                            defaultValue={defaultValue?.tuitionFees}
                                            required {...register("tuitionFees")} type="number" placeholder="Tution Fees" className="input input-bordered w-full " />
                                    </label>
                                    {/* application fees */}
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Application Fees</span>
                                        </div>
                                        <input
                                            defaultValue={defaultValue?.applicationFees}
                                            required {...register("applicationFees")} type="number" placeholder="Application Fees" className="input input-bordered w-full " />
                                    </label>
                                    {/* service charge */}
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Service Charge</span>
                                        </div>
                                        <input
                                            defaultValue={defaultValue?.serviceCharge}
                                            required     {...register("serviceCharge")} type="number" placeholder="Service Charge" className="input input-bordered w-full " />
                                    </label>
                                    {/* deadline */}
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Deadline</span>
                                        </div>
                                        <input
                                            defaultValue={defaultValue?.applicationDeadline}
                                            {...register("applicationDeadline")} type="date" placeholder="Deadline" className="input input-bordered w-full " />
                                    </label>
                                    {/* description */}
                                    <label className="form-control w-full col-span-2">
                                        <div className="label">
                                            <span className="label-text">Description</span>
                                        </div>
                                        <textarea
                                            defaultValue={defaultValue?.scholarshipDescription}
                                            required {...register("scholarshipDescription")} className="textarea textarea-bordered h-24" placeholder="Write the scholarship description..."></textarea>
                                    </label>



                                </div>

                                {/* button submit */}
                                <div className="w-11/12 mx-auto mt-5">

                                    <div className="flex justify-end items-center gap-4 mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={() => setEditModal(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button

                                            type="submit" className="btn btn-primary">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </form >
                        </div>
                    </div>
                )
            }

            <Heading one={"Manage Scholarship"}></Heading>
            <div className="w-11/12 mx-auto">
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                        <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Sl No</th>
                                <th className="border border-gray-300 px-4 py-2">Scholarship Name</th>
                                <th className="border border-gray-300 px-4 py-2">University Name</th>
                                <th className="border border-gray-300 px-4 py-2">Subject Category</th>
                                <th className="border border-gray-300 px-4 py-2">Degree</th>
                                <th className="border border-gray-300 px-4 py-2">Application Fees</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {scholarship?.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.scholarshipName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.universityName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.subjectCategory}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item?.degree}</td>
                                    <td className="border border-gray-300 px-4 py-2">${item?.applicationFees}</td>
                                    <td className="border border-gray-300 px-4 py-2 flex justify-center items-center space-x-2">
                                        <Link to={`/s-details/${item?._id}`} className="tooltip" data-tip="View Details" >
                                            <button
                                                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                                <MdOutlineDescription></MdOutlineDescription>
                                            </button>
                                        </Link>

                                        <div className="tooltip" data-tip="Edit">
                                            <button
                                                onClick={() => handleEditBtn(item?._id)}
                                                className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                                <CiEdit className="text-white font-bold"></CiEdit>
                                            </button>
                                        </div>

                                        <div className="tooltip" data-tip="Delete">
                                            <button
                                                onClick={() => handleDelte(item?._id)}
                                                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                                <FaDeleteLeft></FaDeleteLeft>
                                            </button>
                                        </div>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default M_scholarship;