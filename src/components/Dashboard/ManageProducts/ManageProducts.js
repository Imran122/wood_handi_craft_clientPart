import React from 'react';
import useProducts from '../../../hooks/useProducts';
import imgbg from '../../../images/body/default.png'
const ManageProducts = () => {
    const [products, setProducts] = useProducts()

    //delete product from the list

    const handelDeleteOrder = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingProduct = products.filter(restProduct => restProduct._id !== id);
                        setProducts(remainingProduct)
                    }
                })
        }
    }
    return (
        <div>
            <section class="my-8">
                <h2 class="text-2xl font-semibold flex justify-center">Products List</h2>
                <div>
                    <div class="flex flex-col my-4">
                        <div class="m-2">
                            <div class="component flex">
                                <div class="w-full p-8 shadow-lg rounded-lg bg-gray-100 overflow-x-auto">
                                    <table class="w-full text-left">
                                        <thead>
                                            <tr>
                                                <th class="pb-6 text-gray-500 text-sm tracking-wide">Product Name</th>
                                                <th class="pb-6 text-gray-500 text-sm tracking-wide">Price</th>

                                                <th class="pb-6 text-gray-500 text-sm tracking-wide">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {products.map(product => (
                                                <tr class="" key={product._id}>
                                                    <td class="py-3">
                                                        <div class="flex">
                                                            <div class="w-12 h-12 bg-cover rounded-lg" style={{ backgroundImage: `url(${product.picture})` }}></div>
                                                            <div class="leading-none ml-5 flex flex-col justify-around">
                                                                <div class="tracking-wide font-bold">{product.name}</div>

                                                            </div>
                                                        </div>
                                                    </td>


                                                    <td>
                                                        <div class="text-sm text-gray-400"><span class="font-black text-indigo-500">{product.price}</span></div>
                                                    </td>
                                                    <td>
                                                        <div class="">
                                                            <button onClick={() => handelDeleteOrder(product._id)} class="text-center px-4 py-2 text-xs font-bold rounded opacity-75 bg-yellow-200 text-yellow-700">Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}




                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageProducts;