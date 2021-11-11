import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
const Purchase = () => {
    const { user } = useAuth()
    const [product, setProduct] = useState({})
    const { id } = useParams();
    //successful message set
    const [orderSuccess, setOrderSuccess] = useState(false)
    //initial store data 
    const initialInfo = { displayName: user.displayName, email: user.email, address: '', phone: '' }

    //save data in state
    const [orderInfo, setOrderInfo] = useState(initialInfo)

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])
    //change handler when type in input field
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...orderInfo };
        newOrderData[field] = value;
        setOrderInfo(newOrderData)


    }
    //send order data to the DB
    const orderSubmit = e => {
        const newOrder = { ...orderInfo, product: product.name, price: product.price }
        fetch('http://localhost:5000/orderlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true)
                    e.target.reset()
                }
            })
        e.preventDefault();
    }
    return (
        <>
            <div className="flex items-center min-h-screen bg-gray-50">
                <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                    <div className="flex flex-col md:flex-row">
                        <div className="h-32 md:h-auto md:w-1/2">
                            <img className="object-cover w-full h-2/4" src={product.picture}
                                alt="img" />
                            <p>{product.about}</p>
                        </div>
                        <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 mt-10">
                            <div className="w-full">
                                {orderSuccess &&
                                    <button type="button" class="bg-rose-600 text-green-500" disabled>
                                        <svg class="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">

                                        </svg>
                                        Placed Order Successfully
                                    </button>
                                }
                                <form onSubmit={orderSubmit}>

                                    <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                        Place Order Here
                                    </h1>
                                    <div className="flex justify-center">
                                        <h2>{product.name}</h2>
                                    </div>
                                    <div>
                                        <label className="block text-sm">
                                            Name
                                        </label>
                                        <input type="text"
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            defaultValue={user.displayName} name="displayName" onBlur={handleOnBlur} />
                                    </div>
                                    <div>
                                        <label className="block text-sm">
                                            Email
                                        </label>
                                        <input type="email"
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            defaultValue={user.email} name="email" onBlur={handleOnBlur} />
                                    </div>
                                    <div>
                                        <label className="block text-sm">
                                            Product Name
                                        </label>
                                        <input type="text"
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            defaultValue={product.name} disabled />
                                    </div>
                                    <div>
                                        <label className="block text-sm">
                                            Price
                                        </label>
                                        <input type="text"
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            defaultValue={product.price} disabled />
                                    </div>
                                    <div>
                                        <label className="block text-sm">
                                            Address
                                        </label>
                                        <input type="text"
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Your Address" name="address" onBlur={handleOnBlur} />
                                    </div>
                                    <div>
                                        <label className="block text-sm">
                                            Phone
                                        </label>
                                        <input type="text"
                                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                            placeholder="Your Phone No" name="phone" onBlur={handleOnBlur} />
                                    </div>


                                    <button
                                        type="submit" className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                    >
                                        Purchase
                                    </button>


                                    <hr className="my-8" />


                                    <div className="flex items-center justify-center gap-4">


                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;