import React from 'react';

import MyOrder from '../MyOrders/MyOrder';
import './Dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

import MakeReview from '../MakeReview/MakeReview';
import MakeAdmin from '../makeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Authentication/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrders from '../ManageOrders/ManageOrders';
import AdminHome from '../AdminHome/AdminHome';
import ManageProducts from '../ManageProducts/ManageProducts';
import Payment from '../Payment/Payment';
import defaultImg from '../../../images/body/default.png'

const Dashboard = () => {
    const { user } = useAuth()
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth()

    return (
        <div>

            <div class="font-font-sans bg-gray-100 bg-opacity-75 ">
                <div class="bg-gray-800 bg-opacity-100 p-4 flex items-center justify-between ">
                    <div class="flex items-center justify-center space-x-4">
                        <Link className="text-white flex items-center space-x-2 px-4" title="Your App is cool">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            <span className="text-2xl font-extrabold whitespace-nowrap truncate"> I-Craft</span>

                        </Link>

                    </div>
                    <div class="ml-auto flex items-center px-4">

                        <div class="flex lg:flex ">
                            {user?.photoURL ?
                                <img class="w-6 h-6 rounded-full" src={user.photoURL} alt="" />
                                :
                                <img class="w-6 h-6 rounded-full" src={defaultImg} alt="" />
                            }


                            <div class="text-gray-300 ml-2">{user.displayName}</div>

                            <button onClick={logOut} class="mx-5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />

                                </svg>

                            </button>

                        </div>
                    </div>
                </div>

            </div>




            {/* main part of the dashboard with left side menu  */}
            <div className="relative min-h-screen md:flex" data-dev-hint="container">
                <input type="checkbox" id="menu-open" className="hidden" />



                <header className="bg-gray-600 text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
                    <Link className="block p-4 text-white font-bold whitespace-nowrap truncate">
                        I-Craft
                    </Link>

                    <label htmlFor="menu-open" id="mobile-menu-button" className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
                        <svg id="menu-open-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg id="menu-close-icon" className="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </label>
                </header>

                <aside id="sidebar" className="bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
                    <div className="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">


                        <nav data-dev-hint="main navigation">

                            <Link to="/home" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="ml-6">Home</span>
                            </Link>

                            <Link to={`${url}`} className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                                <span>Dashboard</span>
                            </Link>


                            {!admin &&
                                <>
                                    <Link to={`${url}/makeReview`} className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
                                        </svg>

                                        <span className="ml-6">Make Review</span>
                                    </Link>
                                    <Link to={`${url}/myOrder`} className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>

                                        <span className="ml-6">My Order</span>
                                    </Link>
                                    <Link to={`${url}/payment`} className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="ml-6">

                                            Payment
                                        </span>
                                    </Link>

                                </>
                            }


                            {admin &&
                                <>
                                    <Link to={`${url}/makeAdmin`} className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span className="ml-6">Make Admin</span>
                                    </Link>
                                    <Link to={`${url}/addProduct`} className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>

                                        <span className="ml-6">Add Product</span>
                                    </Link>
                                    <Link to={`${url}/manageOrders`} className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="ml-6">Manage Orders</span>
                                    </Link>
                                    <Link to={`${url}/manageProducts`} className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                        </svg>
                                        <span className="ml-6">Manage Products</span>
                                    </Link>
                                </>
                            }


                        </nav>
                    </div>


                </aside>

                <main id="content" className="flex-1 p-6 lg:px-8">


                    <div className="max-w-7xl mx-auto">




                        <div className="px-4 py-6 sm:px-0">
                            <div className="border-4 border-dashed border-gray-200 rounded-lg h-5/6">

                                <Switch>
                                    <Route exact path={path}>
                                        {admin ?
                                            <AdminHome></AdminHome>
                                            :
                                            <MyOrder></MyOrder>
                                        }

                                    </Route>

                                    <Route path={`${path}/myOrder`}>
                                        <MyOrder></MyOrder>
                                    </Route>

                                    <Route path={`${path}/payment`}>
                                        <Payment></Payment>
                                    </Route>
                                    <Route path={`${path}/makeReview`}>
                                        <MakeReview></MakeReview>
                                    </Route>
                                    <AdminRoute path={`${path}/makeAdmin`}>
                                        <MakeAdmin></MakeAdmin>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/addProduct`}>
                                        <AddProduct></AddProduct>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageOrders`}>
                                        <ManageOrders></ManageOrders>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageProducts`}>
                                        <ManageProducts></ManageProducts>
                                    </AdminRoute>
                                </Switch>



                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;