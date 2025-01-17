import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../AuthContext/AuthProvider";

const CheckoutForm = ({ id }) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("")
    const [modal, setModal] = useState(false);
    const [pay, setPay] = useState({})
    const { user } = useContext(AuthContext);

    console.log(id, "form props")
    const _id = { _id: id }
    useEffect(() => {
        axiosSecure.post(`/create-payment-intent`, _id)
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
            .catch(err => {
                console.log(err)
            })
    }, [axiosSecure, id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log("[error]", error);
            toast.error(error.message)
        }
        else {
            console.log("[PaymentMethod]", paymentMethod);


        }
        // !conirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "Annonymous",
                    name: user?.displayName || "Annonymous"
                }

            }
        })

        if (confirmError) {
            toast.error(confirmError);
        }
        else {
            console.log("payment-intent--->", paymentIntent)
            if (paymentIntent.status === "succeeded") {
                setPay(paymentIntent)
                setModal(true)
                toast.success("Your Payment Success!")
            }
        }

    };

    return (

        <div className="w-full h-full">
            {
                modal && <div className="w-full min-h-screen flex justify-center items-center bg-[rgba(145,166,23,0.3)] backdrop-blur-md fixed top-0 z-50">
                    <div className="w-11/12 mx-auto md:w-1/2 p-4 md:p-10 bg-white shadow-md rounded-xl">
                        <h1 className="text-2xl md:text-4xl font-logoFont font-extrabold text-transparent 
                    bg-gradient-to-tr from-orange-500 mb-4 to-fuchsia-500 bg-clip-text ">Payment Success!</h1>

                        {/* close btn */}
                        <div
                            onClick={() => setModal(false)}
                            className="text-xl font-logoFont text-center bg-orange-500 text-white w-fit mx-auto px-5 py-2 rounded-xl cursor-pointer hover:bg-orange-400 ">
                            Ok
                        </div>
                    </div>
                </div>
            }
            <div className="w-11/12 md:w-1/2 mx-auto p-6 bg-orange-200 shadow-lg rounded-lg">
                <form onSubmit={handleSubmit}>
                    <div className="p-4 border rounded-lg shadow-sm bg-gray-50">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#424770",
                                        backgroundColor: "#f9fafb",
                                        borderRadius: "6px",
                                        fontFamily: "Arial, sans-serif",
                                        padding: "10px",
                                        "::placeholder": {
                                            color: "#aab7c4",
                                        },
                                    },
                                    invalid: {
                                        color: "#9e2146",
                                    },
                                },
                            }}
                            className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="flex items-center justify-center w-full py-3 mt-6 text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-400 focus:ring-4 focus:ring-orange-300 font-medium text-lg transition-transform transform hover:scale-105"
                        disabled={!stripe || !clientSecret}
                    >
                        <FaShoppingCart className="mr-2 text-xl" /> Checkout
                    </button>
                </form>
            </div>

        </div>
    );
};

export default CheckoutForm;
