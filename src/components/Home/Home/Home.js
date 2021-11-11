import React from 'react';
import Banner from '../../Home/Banner/Banner';
import Footer from '../../shared/Footer/Footer';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import FreqQuestion from '../FreqQuestion/FreqQuestion';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';




const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <FreqQuestion></FreqQuestion>
            <Footer></Footer>
        </div>
    );
};

export default Home;