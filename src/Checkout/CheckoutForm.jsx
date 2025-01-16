import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("")

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
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-orange-200 shadow-lg rounded-lg">
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
                    disabled={!stripe}
                >
                    <FaShoppingCart className="mr-2 text-xl" /> Checkout
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
