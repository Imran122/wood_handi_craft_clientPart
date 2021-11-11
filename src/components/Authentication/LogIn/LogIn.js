import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logInImg from '../../../images/body/login.jpg'

const LogIn = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError } = useAuth()
    const handelOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);


    }
    const handelLogInSubmit = e => {
        loginUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <>
            <div class="mx-auto mt-28 mb-28 authentication-bg">
                <div class="flex justify-center items-center h-screen px-6">

                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">

                        <div
                            class=""

                        >
                            <img class="w-full lg:h-4/5 bg-gray-400 hidden lg:block lg:w-3/4 lg:mt-16 bg-cover rounded-l-lg" src={logInImg} alt="" />
                        </div>

                        <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">

                            {user?.email &&
                                <p>user created successfully</p>
                            }
                            {authError &&
                                <p>{authError}</p>
                            }

                            <h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>

                            {!isLoading &&
                                <form onSubmit={handelLogInSubmit} class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                    <div class="mb-4">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                                            Email
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="username"
                                            type="email"
                                            name="email"
                                            onChange={handelOnChange}
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                            Password
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            name="password"
                                            onChange={handelOnChange}
                                            placeholder="******************"
                                        />
                                        <p class="text-xs italic text-red-500">Please choose a password.</p>
                                    </div>
                                    <div class="mb-4">
                                        <input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                                        <label class="text-sm" for="checkbox_id">
                                            Remember Me
                                        </label>
                                    </div>
                                    <div class="mb-6 text-center">
                                        <button
                                            class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Sign In
                                        </button>
                                        <hr class="my-6 border-gray-300 w-full" />

                                        <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                            <div class="flex items-center justify-center h-6">
                                                <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                                                <span class="ml-4">
                                                    Log in
                                                    with
                                                    Google</span>
                                            </div>
                                        </button>
                                    </div>
                                    <hr class="mb-6 border-t" />
                                    <div class="text-center">

                                        <NavLink to="/registration">
                                            <button
                                                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"

                                            >
                                                Create an Account!
                                            </button>
                                        </NavLink>
                                    </div>

                                </form>
                            }


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LogIn;