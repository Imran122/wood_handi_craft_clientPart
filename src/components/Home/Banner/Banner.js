import React from 'react';
import './Banner.css'
import bannerimg from '../../../images/header/banner-img.png'
const Banner = () => {
    return (


        <div class="md:flex items-center justify-around py-12">
            <div>
                <h1 className="text-3xl font-bold uppercase">
                    <span>I-Craft </span>
                    <br />
                    <span>The best handicraft service in your area. </span>
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