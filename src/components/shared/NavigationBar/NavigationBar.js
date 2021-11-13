import React from 'react';
import './NavigationBar.css'
import logo from '../.../../../../images/header/logo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import defaultImg from '../../../images/body/default.png'
const NavigationBar = () => {

    const { user, logOut } = useAuth()


    return (
        <div className=" bg-custom-nav bg-opacity-100 overflow-hidden">
            <nav className="nav flex flex-wrap items-center justify-between px-4 ">
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


                            <li className=" md:border-none flex inline">
                                {user.photoURL ?
                                    <img
                                        className="h-8 w-8 rounded-full mt-2"
                                        src={user.photoURL}
                                        alt=""
                                    />
                                    :
                                    <img
                                        className="h-8 w-8 rounded-full mt-2"
                                        src={defaultImg}
                                        alt=""
                                    />
                                }

                                <button onClick={logOut} className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">
                                    {user.displayName}

                                </button>
                                <button onClick={logOut}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                </button>
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