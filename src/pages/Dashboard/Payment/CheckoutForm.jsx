import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from '../../../Hooks/useCart';
import useAxios from "../../../Hooks/useAxios";
import Auth from "../../../Hooks/Auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {

    const { user } = Auth();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const axios = useAxios();
    const [cart] = useCart();
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axios.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecrete);
                    setClientSecret(res.data.clientSecrete);
                })
        }
    }, [axios, totalPrice]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('error', [error]);
            setError(error.message);
        } else {
            console.log('payment', [paymentMethod]);
            setError('');
        }

        const { paymentIntent, err } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || "anonymous",
                    email: user?.email || "anonymous"
                }
            }
        })

        if (err) {
            console.log(err)
        } else {
            console.log(paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);


                const payment = {
                    email: user.email,
                    name: user.displayName,
                    transactionId: paymentIntent.id,
                    price: totalPrice,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: 'pending'
                }
                const res = await axios.post('/payments', payment)
                console.log(res.data)
                if (res?.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Thank you for this payment",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')
                }

            }
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
                className="w-[970px] mx-auto text-start text-xl font-bold font-inter border-4 px-20 py-6 rounded-lg"
            />
            <p className="w-[970px] mx-auto text-start mt-2 px-2 font-inter text-red-600">{error}</p>
            {
                transactionId && <p className="w-[970px] mx-auto text-start mt-2 px-2 font-inter text-green-600">Your transaction id: {transactionId}</p>
            }
            <div className="text-center">
                <button type="submit" disabled={!stripe || !clientSecret} className="mt-16 text-xl font-bold font-inter py-5 px-40 text-white bg-[#570DF8] rounded-lg">
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;