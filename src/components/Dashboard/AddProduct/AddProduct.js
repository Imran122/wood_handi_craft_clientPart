import React, { useState } from 'react';
import './AddProduct.css'
const AddProduct = () => {
    //const [products, setProducts] = useState({})
    const [success, setSuccess] = useState(false)
    const initialInfo = { name: '', price: '', picture: '', about: '' }
    //change handler when type in input field
    const [productInfo, setProductInfo] = useState(initialInfo)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...productInfo };
        newProductData[field] = value;
        setProductInfo(newProductData)
        console.log(newProductData)

    }
    //send order data to the DB
    const productDataSubmit = e => {
        const newProduct = { ...productInfo }
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                    e.target.reset()

                }
            })
        e.preventDefault();
    }
    return (
        <div className="w-80 mx-auto">

            <form onSubmit={productDataSubmit} class="form-main mt-5 mb-5 w-80">
                <h3 class="flex justify-center">ADD PRODUCT</h3>
                {success &&
                    <button type="button" className="bg-rose-600 text-green-500" disabled>
                        <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24">

                        </svg>
                        Added Product Successfully
                    </button>
                }
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" >
                        Name
                    </label>
                    <input name="name" onBlur={handleOnBlur} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Text input" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" >
                        Price
                    </label>
                    <input name="price" onBlur={handleOnBlur} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Text input" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        Picture
                    </label>
                    <input name="picture" onBlur={handleOnBlur} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Text input" />
                </div>



                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                        Description
                        <textarea name="about" onBlur={handleOnBlur} class="shadow form-textarea mt-1 block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="5" placeholder="Textarea"></textarea>
                    </label>
                </div>
                <div class="flex items-center justify-between">
                    <button class="form-product-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;