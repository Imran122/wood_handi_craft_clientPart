import React from 'react';
import useOrders from '../../../hooks/useOrders';
import img from "../../../images/body/article.jpg";
import ProductData from '../ProductData/ProductData';
const AllProducts = () => {
    const [products, setProducts] = useOrders();
    return (
        <div>
            <section>
                <div className="container mx-auto px-6 py-20">

                    <div className="flex flex-wrap">

                        {products.map(product => <ProductData
                            key={product._id}
                            product={product}
                        >

                        </ProductData>)

                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllProducts;