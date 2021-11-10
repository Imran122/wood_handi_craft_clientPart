import React from 'react';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import FreqQuestion from '../FreqQuestion/FreqQuestion';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';




const Home = () => {
    return (
        <div>

            <Products></Products>
            <Reviews></Reviews>
            <FreqQuestion></FreqQuestion>
        </div>
    );
};

export default Home;