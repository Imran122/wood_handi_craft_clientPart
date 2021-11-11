import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logInImg from '../../../images/body/login.jpg'
import './Registration.css'
import useAuth from '../../../hooks/useAuth';
const Registration = () => {
    const [loginData, setLoginData] = useState({})
    const { user, registerUser, isLoading, authError } = useAuth()

    const handelOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);


    }
    //submittting register data
    const handelLogInSubmit = e => {
        if (loginData.password !== loginData.password2) {

            return;
        }
        //submitttingconsole.log(loginData.email, loginData.password)
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <>
            <div className="mx-auto mt-16 mb-28 authentication-bg">
                <div className="flex justify-center items-center h-screen px-6">

                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                        <div
                            className="lg:h-4/5"

                        >
                            <img className="w-full  bg-gray-400 hidden lg:block lg:w-3/4 lg:mt-16 bg-cover rounded-l-lg" src={logInImg} alt="" />
                        </div>

                        <div className=" w-full lg:w-1/2  p-5 rounded-lg lg:rounded-l-none">

                            {user?.email &&
                                <p>user created successfully</p>
                            }
                            {authError &&
                                <p>{authError}</p>
                            }

                            <h3 className="pt-4 text-2xl text-center">Sign Up Please!</h3>

                            {!isLoading &&
                                <form onSubmit={handelLogInSubmit} className=" px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="username">
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"

                                            type="email"
                                            name="email"
                                            onBlur={handelOnChange}
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"

                                            name="password"
                                            onBlur={handelOnChange}
                                            type="password"
                                            placeholder="your password"
                                        />
                                        <p className="text-xs italic text-red-500">Please choose a password.</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                                            Re-Type Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"

                                            type="password"
                                            name="password2"
                                            onBlur={handelOnChange}
                                            placeholder="Re-type your password"
                                        />
                                        <p className="text-xs italic text-red-500">Please choose a password.</p>
                                    </div>

                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Sign Up
                                        </button>
                                        <hr className="my-6 border-gray-300 w-full" />

                                        <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                            <div className="flex items-center justify-center h-6">
                                                <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                                                <span className="ml-4">
                                                    Log in
                                                    with
                                                    Google</span>
                                            </div>
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                    <div className="text-center">

                                        <NavLink to="/login">
                                            <button
                                                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"

                                            >
                                                Already Have Account!
                                            </button>
                                        </NavLink>
                                    </div>

                                </form>
                            }
                            {isLoading &&
                                <button type="button" className="bg-rose-600 ..." disabled>
                                    <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

                                    </svg>
                                    Processing
                                </button>
                            }


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Registration;