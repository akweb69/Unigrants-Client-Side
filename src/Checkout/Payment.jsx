import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API_KEY)

const Payment = () => {
    const { id } = useParams()
    return (
        <div className="w-full min-h-[80vh] flex justify-center items-center">
            <div className=" w-full  mx-auto  rounded-xl">
                <h1 className="text-2xl md:text-4xl font-logoFont font-extrabold text-transparent 
                    bg-gradient-to-tr from-orange-500 mb-4 to-fuchsia-500 bg-clip-text  w-fit mx-auto px-4">Payment First</h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm id={id}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;