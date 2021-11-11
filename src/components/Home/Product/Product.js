import React from 'react';

const Product = (props) => {
    const { _id, name, price, picture, about } = props.product;

    return (
        <>
            <div className="w-full md:w-1/3 px-2 mb-4 rounded-lg shadow-lg">
                <div className="bg-white py-2 ">
                    <img src={picture} className="w-full h-full" alt="" />
                    <h3 className="text-center uppercase font-customBold mt-3 mb-2">{name}</h3>
                    <p className="text-gray-800 text-base px-6 mb-5">
                        {about.split('').slice(0, 90).toString().replace(/,/g, '')}
                    </p>
                    <div className=" flex items-center justify-between flex-wrap">
                        <p className="text-dark-gray-500 text-xs md:text-sm px-6">
                            {price}
                        </p>
                        <div className="flex inline">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <button>Buy Now</button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Product;