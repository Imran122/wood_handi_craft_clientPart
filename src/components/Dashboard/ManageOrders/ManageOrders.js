import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import useProducts from '../../../hooks/useProducts';
import defaultImg from '../../../images/body/default.png'
const ManageOrders = () => {
    const { user } = useAuth();
    const [ordersAll, setOrdersAll] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/adminAllOrder')
            .then(response => response.json())
            .then(data => setOrdersAll(data))
    }, [])

    //DELETE an order from list
    const handelDeleteOrder = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/orderlist/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrder = ordersAll.filter(restOrder => restOrder._id !== id);
                        setOrdersAll(remainingOrder)
                    }
                })
        }
    }
    //method for change status pending to shiped
    const handelShipedOrder = id => {

        const url = `http://localhost:5000/orderlist/${id}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
        })
            .then(response => response.json())
            .then(data => {
                let updateOrder = [...ordersAll]
                console.log(updateOrder)
                for (let i = 0; i < updateOrder.length; i++) {
                    if (updateOrder[i]._id === id) {
                        updateOrder[i].status = true;
                    }

                }
                setOrdersAll(updateOrder)
            })
    }
    return (
        <div>
            <div className="antialiased font-sans bg-gray-200">
                <div className="w-full shadow bg-white rounded">
                    <div className="border-gray-200 w-full rounded bg-white overflow-x-auto">
                        <table className="w-full leading-normal ">
                            <thead
                                className="text-gray-600 text-xs font-semibold border-gray tracking-wider text-left px-5 py-3 bg-gray-100 hover:cursor-pointer uppercase border-b-2 border-gray-200">
                                <tr className="border-b border-gray">
                                    <th scope="col"
                                        className="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        <div className="inline-block">
                                            <div className="filter-asc"
                                            >
                                            </div>
                                            <div className="filter-desc"
                                            >
                                            </div>
                                        </div>
                                        Name
                                    </th>

                                    <th scope="col"
                                        className="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">

                                        Product Name
                                    </th>
                                    <th scope="col"
                                        className="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        <div className="inline-block">
                                            <div className="filter-asc"
                                            >
                                            </div>
                                            <div className="filter-desc"
                                            >
                                            </div>
                                        </div>
                                        Price
                                    </th>
                                    <th scope="col"
                                        className="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        <div className="inline-block">
                                            <div className="filter-asc"
                                            >
                                            </div>
                                            <div className="filter-desc"
                                            >
                                            </div>
                                        </div>
                                        Status
                                    </th>
                                    <th scope="col"
                                        className="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">

                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {ordersAll.map(order => (
                                    <tr className="hover:bg-gray-100 hover:cursor-pointer" key={order._id}>
                                        <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                            <div className="flex items-center" classes="[object Object]">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    {user?.photoURL ?
                                                        <img src={user.photoURL} alt="" className="w-full h-full rounded-full" />
                                                        :
                                                        <img src={defaultImg} alt="" className="w-full h-full rounded-full" />
                                                    }

                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">{order.displayName}</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                            <ul classes="[object Object]">
                                                <li>{order.product}</li>
                                            </ul>
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                            <span>{order.price}</span>
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                            {order.status === false ?
                                                <button
                                                    onClick={() => handelShipedOrder(order._id)}
                                                    className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-red-200 text-red-900"
                                                    classes="[object Object]">
                                                    pending
                                                </button>
                                                :
                                                <button
                                                    className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-green-200 text-green-900"
                                                    classes="[object Object]" disabled>
                                                    Shipped
                                                </button>
                                            }


                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                            <button
                                                className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-red-200 text-red-900"
                                                classes="[object Object]" onClick={() => handelDeleteOrder(order._id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))


                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageOrders;