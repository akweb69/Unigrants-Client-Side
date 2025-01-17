import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../AuthContext/AuthProvider";
import useAll_Schol from "../Hooks/useAll_Schol";
import { useForm } from "react-hook-form";

const CheckoutForm = ({ id }) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const [modal, setModal] = useState(false);
    const [pay, setPay] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useContext(AuthContext);

    const [scholarship] = useAll_Schol();
    const [sData, setSData] = useState({
        scholarshipName: "N/A",
        scholarshipCategory: "N/A",
        degree: "N/A",
        subjectCategory: "N/A",
        universityName: "N/A",
        universityCountry: "N/A",
        applicationFees: "0",
    });

    const date = new Date();
    const time = date.toLocaleTimeString();
    const today = date.toLocaleDateString();

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            const scData = scholarship.filter((data) => data._id === id);
            if (isMounted) setSData(scData[0] || {});

            try {
                const res = await axiosSecure.post(`/create-payment-intent`, { _id: id });
                if (isMounted) setClientSecret(res.data.clientSecret);
            } catch (err) {
                console.error("Error creating payment intent:", err);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [axiosSecure, id, scholarship]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setIsLoading(true);
        const card = elements.getElement(CardElement);

        if (card == null) {
            setIsLoading(false);
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.error("[Payment Error]", error);
            toast.error(error.message);
            setIsLoading(false);
            return;
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "Anonymous",
                    name: user?.displayName || "Anonymous",
                },
            },
        });

        if (confirmError) {
            toast.error("Payment confirmation failed. Please try again.");
            console.error("Payment confirmation error:", confirmError);
        } else {
            if (paymentIntent.status === "succeeded") {
                setPay(paymentIntent);
                setModal(true);
                toast.success("Payment successful!");
            }
        }

        setIsLoading(false);
    };

    const { register, handleSubmit: formdata } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div className="w-full h-full">

            {modal && (
                <div className="w-full min-h-screen flex justify-center items-center bg-[rgba(145,166,23,0.3)] backdrop-blur-md fixed top-0 z-50 overflow-scroll">
                    <div className="w-11/12 mx-auto h-[90vh] overflow-y-scroll md:w-2/3 p-4 md:p-10 bg-white shadow-md rounded-xl">
                        <h1 className="text-2xl md:text-4xl font-extrabold text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 mx-auto w-fit bg-clip-text font-logoFont pb-3">
                            Payment Success!
                        </h1>
                        <div className="border border-orange-400 rounded-lg p-4">
                            <p className="text-xl">
                                <b className="text-red-500">Pay For:</b> {sData?.scholarshipName || "N/A"}
                            </p>
                            <p className="text-orange-500 font-semibold">
                                {sData?.scholarshipCategory || "N/A"} | {sData?.degree || "N/A"} |{" "}
                                {sData?.subjectCategory || "N/A"}
                            </p>
                            <p className="text-lg font-semibold text-orange-500">{sData?.universityName || "N/A"}</p>
                            <p className="font-semibold text-xs md:text-sm text-red-500">
                                {sData?.universityCountry || "N/A"}
                            </p>
                            <div className="bg-orange-200 mt-2">
                                <p>
                                    <b>Trans_ID:</b> {pay?.id || "N/A"}
                                </p>
                                <p>
                                    <b>Total:</b> ${sData?.applicationFees || "0"}
                                </p>
                                <p>
                                    <b>Time:</b> {time}
                                </p>
                                <p>
                                    <b>Date:</b> {today}
                                </p>
                            </div>
                            <button className="btn btn-sm mt-4 btn-warning">Download Receipt</button>
                        </div>
                        {/* form  */}
                        <div className="w-full py-4">
                            <h1 className="text-xl font-semibold text-center font-logoFont ">Fill The Form</h1>
                            <div className="divider"></div>
                            <form className="md:grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0" onSubmit={formdata(onSubmit)}>
                                {/* number */}
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Applicant Phone Number*</span>
                                    </div>
                                    <input {...register("phone")} required type="number" placeholder="Phone Number" className="input input-bordered w-full " />
                                </label>
                                {/* gendar  */}
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Applicant Gender*</span>

                                    </div>
                                    <select required {...register("gender")} className="select select-bordered">
                                        <option disabled selected>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>

                                </label>
                                {/* adress */}
                                <p className="col-span-2 w-full">Applicant Address*</p>
                                <div className="col-span-2 md:grid grid-cols-3 gap-4 space-y-4 md:space-y-0">
                                    <input {...register("vill")} required type="text" placeholder="Village Name" className="input input-bordered w-full " />
                                    <input {...register("dist")} required type="text" placeholder="District Name" className="input input-bordered w-full " />
                                    <input {...register("country")} required type="text" placeholder="Country Name" className="input input-bordered w-full " />
                                </div>
                                {/* result */}
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">SSC Result*</span>
                                    </div>
                                    <input  {...register("ssc")} required type="number" placeholder="5.00" className="input input-bordered w-full " />
                                </label>
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">HSC Result*</span>
                                    </div>
                                    <input {...register("hsc")} required type="number" placeholder="5.00" className="input input-bordered w-full " />
                                </label>
                                {/* degree  */}
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Applicant Applying Degree*</span>
                                    </div>
                                    <select required {...register("degree")} className="select select-bordered">
                                        <option disabled selected>Select Degree</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="Bachelor">Bachelor</option>
                                        <option value="Masters">Masters</option>
                                    </select>
                                </label>
                                {/* gap */}
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Study Gap Years</span>
                                    </div>
                                    <input {...register("gap")} type="number" placeholder="If have then put that" className="input input-bordered w-full " />
                                </label>
                                {/* photo */}
                                <label className="form-control w-full col-span-2">
                                    <div className="label">
                                        <span className="label-text">Applicant Photo*</span>
                                    </div>
                                    <input {...register("photo")} required type="file" className="file-input file-input-bordered w-full" />
                                </label>
                                <button className="text-center col-span-2 bg-orange-500 text-white px-5 py-2 mt-4 rounded-xl cursor-pointer hover:bg-orange-400">
                                    Submit
                                </button>
                            </form>
                        </div>


                    </div>
                </div>
            )}

            <div className="w-11/12 md:w-1/2 mx-auto p-6 bg-orange-200 shadow-lg rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#424770",
                                        fontFamily: "Arial, sans-serif",
                                        "::placeholder": { color: "#aab7c4" },
                                    },
                                    invalid: { color: "#9e2146" },
                                },
                            }}
                            className="p-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className={`flex items-center justify-center w-full py-3 mt-6 text-white ${isLoading ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-400"
                            } rounded-lg shadow-md`}
                        disabled={!stripe || !clientSecret || isLoading}
                    >
                        {isLoading ? "Processing..." : <><FaShoppingCart className="mr-2" /> Checkout</>}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;
