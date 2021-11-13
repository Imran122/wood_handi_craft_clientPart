import React from 'react';
import './Banner.css'
import bannerimg from '../../../images/header/banner-img.png'
const Banner = () => {
    return (


        <div className="md:flex items-center justify-around py-12 hero-banner">
            <div>
                <h1 >
                    <span className="text-5xl font-bold uppercase">I-Craft </span>
                    <br />
                    <span className="text-2xl font-bold uppercase">The best Wood's handicraft  </span>
                    <br />
                    <span className="text-2xl font-bold uppercase">Shop in your area.</span>
                </h1>
                <button className="btn-explore uppercase px-7 py-4 mt-8 rounded-xl bg-custom-bg hover:bg-myCustom hover:text-black md:rounded-xl font-customFont text-white ">Explore Us</button>
            </div>

            <div>
                <img width="350" height="250" src={bannerimg} alt="" />

            </div>
        </div>




    );
};

export default Banner;