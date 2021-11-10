import React from 'react';
import Banner from '../../Home/Banner/Banner';
import FreqQuestion from '../FreqQuestion/FreqQuestion';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <FreqQuestion></FreqQuestion>
        </div>
    );
};

export default Home;