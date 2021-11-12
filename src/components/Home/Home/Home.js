import React from 'react';
import Banner from '../../Home/Banner/Banner';
import Footer from '../../shared/Footer/Footer';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import FreqQuestion from '../FreqQuestion/FreqQuestion';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import { useEffect, useState } from 'react';



const Home = () => {
    //set data in reviews
    const [reviews, setReviews] = useState([])
    //fetch data for all reviews
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Products></Products>
            <Reviews
                reviews={reviews}
            >

            </Reviews>
            <FreqQuestion></FreqQuestion>
            <Footer></Footer>
        </div>
    );
};

export default Home;