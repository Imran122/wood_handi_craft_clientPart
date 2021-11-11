
import React, { useContext, createContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";



const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()

    if (isLoading) {
        return <button type="button" class="bg-rose-600 ..." disabled>
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
              
            </svg>
            Processing
        </button>
    }

    
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;