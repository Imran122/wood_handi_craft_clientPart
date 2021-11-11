import React from 'react';
import './NavigationBar.css'
import logo from '../.../../../../images/header/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const NavigationBar = () => {

    const { user, logOut } = useAuth()


    return (
        <div className="">
            <nav className="nav flex flex-wrap items-center justify-between px-4">
                <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">

                    <img className="w-52 h-14" src={logo} alt="" />
                </div>

                <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                    <span className="navicon bg-grey-darkest flex items-center relative"></span>
                </label>

                <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
                    <li className="border-t md:border-none">
                        <NavLink className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold" to="/home">Home</NavLink>
                    </li>
                    <li className="border-t md:border-none">
                        <NavLink className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold" to="/allproducts">Explore</NavLink>
                    </li>

                    {user?.email ?


                        <>
                            <li className="border-t md:border-none">
                                <NavLink className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold" to="/dashboard">Dashboard</NavLink>
                            </li>
                            <li className="border-t md:border-none">
                                <button onClick={logOut} className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">logout</button>
                            </li>
                        </>
                        :
                        <>

                            <li className="border-t md:border-none">
                                <NavLink className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold" to="/registration">SignUp</NavLink>
                            </li>
                            <li className="border-t md:border-none">
                                <NavLink className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold" to="/login">LogIn</NavLink>
                            </li>
                        </>
                    }




                </ul>
            </nav>

        </div>
    );
};

export default NavigationBar;