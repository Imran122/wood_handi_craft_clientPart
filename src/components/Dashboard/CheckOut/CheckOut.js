import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import useSingleOrder from '../../../hooks/useSingleOrder';
import CheckOutForm from '../CheckOutForm/CheckOutForm';

const CheckOut = () => {
    const stripePromise = loadStripe('pk_test_51Idd12KqI911tSdTgwZnSCahePBKncUXIC0mpRuwwl20SSJBM5RIWsGgDF99qXZZ1yDRMOT7PqtAmfojtq3KREdo00gZUXyrah')

    const [orderData] = useSingleOrder()
    const totalPrice = localStorage.getItem('price')


    return (
        <div>
            <h2>checkout {totalPrice} </h2>
            {totalPrice &&
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        totalPrice={totalPrice}
                    >

                    </CheckOutForm>
                </Elements>}

        </div>
    );
};

export default CheckOut;