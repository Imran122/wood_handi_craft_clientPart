import React from 'react';
import logInImg from '../../../images/body/login.jpg'
import './Registration.css'
const Registration = () => {
    return (
        <>


            <div class="mx-auto mt-16 mb-28 authentication-bg">
                <div class="flex justify-center items-center h-screen px-6">

                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">

                        <div
                            class=""

                        >
                            <img class="w-full lg:h-4/5 bg-gray-400 hidden lg:block lg:w-3/4 lg:mt-16 bg-cover rounded-l-lg" src={logInImg} alt="" />
                        </div>

                        <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 class="pt-4 text-2xl text-center">Sign Up Please!</h3>
                            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                                        Username
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Username"
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
                                        placeholder="******************"
                                    />
                                    <p class="text-xs italic text-red-500">Please choose a password.</p>
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                        Re-Type Password
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                    />
                                    <p class="text-xs italic text-red-500">Please choose a password.</p>
                                </div>

                                <div class="mb-6 text-center">
                                    <button
                                        class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Sign Up
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


                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Registration;