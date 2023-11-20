import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

    return (
        <div className="my-40">
            <h2 className="text-4xl font-normal font-inter text-center mb-16 uppercase">payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm/>
            </Elements>
        </div>
    );
};

export default Payment;