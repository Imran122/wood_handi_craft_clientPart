import React from 'react';
import './NavigationBar.css'
import logo from '../.../../../../images/header/logo.png'


import { NavLink } from 'react-router-dom';
const NavigationBar = () => {
    function toggleMenu() {
        const navToggle = document.getElementsByClassName("toggle");
        for (let i = 0; i < navToggle.length; i++) {
            navToggle.item(i).classList.toggle("hidden");
        }
    };
    return (
        <div className="">
            <nav class="nav flex flex-wrap items-center justify-between px-4">
                <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">

                    <img className="w-52 h-14" src={logo} alt="" />
                </div>

                <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
                <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                    <span class="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
                    <li class="border-t md:border-none">
                        <NavLink className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold" to="/home">Home</NavLink>
                    </li>
                    <li class="border-t md:border-none">
                        <NavLink className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold" to="/registration">SignUp</NavLink>
                    </li>
                    <li class="border-t md:border-none">
                        <NavLink className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold" to="/login">LogIn</NavLink>
                    </li>



                </ul>
            </nav>

        </div>
    );
};

export default NavigationBar;