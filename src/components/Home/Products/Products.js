import React from "react";
import useOrders from "../../../hooks/useOrders";

import Product from "../Product/Product";
const Products = () => {
    const [products, setProducts] = useOrders();
    const productsItems = products.slice(0, 6)

    return (
        <>
            <section>
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold text-center text-black uppercase font-customBold mb-8">
                        Products
                    </h2>
                    <div className="flex flex-wrap">

                        {productsItems.map(product => <Product
                            key={product._id}
                            product={product}
                        >

                        </Product>)



                        }


                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;
