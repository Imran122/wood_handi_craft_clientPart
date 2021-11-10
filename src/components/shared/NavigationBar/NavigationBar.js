import React from 'react';
import './NavigationBar.css'
import logo from '../.../../../../images/header/logo.png'
import menu from '../../../images/header/menu-squared-2.png'
import close from '../../../images/header/close-window.png'
import Banner from '../../Home/Banner/Banner';
import { NavLink } from 'react-router-dom';
const NavigationBar = () => {
    function toggleMenu() {
        const navToggle = document.getElementsByClassName("toggle");
        for (let i = 0; i < navToggle.length; i++) {
            navToggle.item(i).classList.toggle("hidden");
        }
    };
    return (
        <div className="hero-banner lg:h-5/6">
            <header className="h-full">
                <nav className="flex flex-wrap items-center justify-between">
                    <img className="w-40 h-16" src={logo} alt="" />
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu}>
                            <img className="toggle block" src={menu} width="40" height="40" alt="" />
                            <img className="toggle hidden" src={close} width="40" height="40" alt="" />
                        </button>
                    </div>
                    <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none font-customFont uppercase text-xl">
                        <NavLink to="/home">Home</NavLink>

                    </div>
                    <a href="#" className="toggle hidden md:flex text-white w-full md:w-auto px-4 py-2 text-right bg-custom-bg hover:bg-myCustom hover:text-black md:rounded font-customFont text-xl">Create Account</a>
                </nav>
                <Banner></Banner>
            </header>
        </div>
    );
};

export default NavigationBar;