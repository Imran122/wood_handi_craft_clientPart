import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import logInImg from '../../../images/body/login.jpg'
import './Registration.css'
import useAuth from '../../../hooks/useAuth';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';
import Footer from '../../shared/Footer/Footer';
const Registration = () => {
    const [loginData, setLoginData] = useState({})
    //to redirevt the previous pages
    const location = useLocation()
    const history = useHistory()
    const { user, registerUser, isLoading, authError, signInWithGoogle } = useAuth()


    const handelOnBlur = e => {
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
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    //google signin metyhod
    const handelGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <>
            <NavigationBar></NavigationBar>
            <div className="flex items-center min-h-screen bg-gray-50">
                <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
                    <div className="flex flex-col md:flex-row">
                        <div className="h-32 md:h-auto md:w-1/2">
                            <img className="object-cover w-full h-full" src={logInImg}
                                alt="img" />
                        </div>
                        <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                            <div className="w-full">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                    {user?.email &&
                                        <p>user logedin successfully</p>
                                    }
                                    {authError &&
                                        <p>{authError}</p>
                                    }
                                </div>
                                {!isLoading &&
                                    <form onSubmit={handelLogInSubmit}>

                                        <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                            Open An Account
                                        </h1>
                                        <div>
                                            <label className="block text-sm">
                                                Name
                                            </label>
                                            <input type="text"
                                                name="name"
                                                onBlur={handelOnBlur}
                                                className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                placeholder="Your Name" />
                                        </div>
                                        <div>
                                            <label className="block text-sm">
                                                Email
                                            </label>
                                            <input type="email"
                                                name="email"
                                                onBlur={handelOnBlur}
                                                className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                placeholder="Your email" />
                                        </div>
                                        <div>
                                            <label className="block mt-4 text-sm">
                                                Password
                                            </label>
                                            <input
                                                name="password"
                                                onBlur={handelOnBlur}
                                                className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                placeholder="Your password" type="password" />
                                        </div>
                                        <div>
                                            <label className="block mt-4 text-sm">
                                                Re-Type Password
                                            </label>
                                            <input
                                                name="password2"
                                                onBlur={handelOnBlur}
                                                className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                placeholder="Re-Type Your password" type="password" />
                                        </div>
                                        <p className="mt-4">
                                            <NavLink to="/login" className="text-sm text-blue-600 hover:underline" >
                                                Already Have Account?
                                            </NavLink>
                                        </p>


                                        <button
                                            type="submit"
                                            className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                        >
                                            Register
                                        </button>
                                    </form>
                                }
                                {isLoading &&
                                    <button type="button" className="bg-rose-600 ..." disabled>
                                        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

                                        </svg>
                                        Processing
                                    </button>
                                }
                                <hr className="my-8" />


                                <div className="flex items-center justify-center gap-4">
                                    <button onClick={handelGoogleSignIn} type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                        <div className="flex items-center justify-center h-6">
                                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                                            <span className="ml-4">
                                                Log in
                                                with
                                                Google</span>
                                        </div>

                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Registration;