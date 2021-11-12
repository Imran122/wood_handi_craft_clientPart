import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Footer from '../../shared/Footer/Footer';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import ProductData from '../ProductData/ProductData';
const AllProducts = () => {
    const [products, setProducts] = useProducts();


    return (
        <>
            <NavigationBar></NavigationBar>
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
            <Footer></Footer>
        </>
    );
};

export default AllProducts;