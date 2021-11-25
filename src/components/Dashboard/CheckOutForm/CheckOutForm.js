import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useSingleOrder from '../../../hooks/useSingleOrder';

const CheckOutForm = ({ totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    //const { price } = orderData;
    const [orderData] = useSingleOrder()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ totalPrice })
        })
            .then(response => response.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [totalPrice])



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess('')
        } else {
            setError('');
            console.log(paymentMethod);
        }
        //payment intent confirm
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: orderData.displayName
                    },
                },

            },
        );

        console.log('hgjhgj', orderData.displayName)

        if (intentError) {
            setError(intentError.message);
            setSuccess('')
        }
        else {
            setError('')
            setSuccess('your payment proceed successfully')
            console.log(paymentIntent)
            setProcessing(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="">
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
                />
                {processing ?
                    <p>its loading</p>
                    :

                    <button type="submit" disabled={!stripe}>
                        Pay ${totalPrice}
                    </button>
                }
            </form>
            {error &&

                <p style={{ color: 'red' }}>{error}</p>
            }
            {success &&

                <p style={{ color: 'green' }}>{success}</p>
            }
        </div>
    );
};

export default CheckOutForm;