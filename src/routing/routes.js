import React from "react";

import {  Redirect } from "react-router-dom";
import {RenderRoutes} from "./RenderRoutes";
import localGetter from "../generals/localGetter";

import Main from "../pages/main/Main";
import LogIn from "../pages/logIn/LogIn";
import SignUp from "../pages/signUp/SignUp";
import Profile from "../pages/profile/Profile";
import Products from "../pages/products/Products";
import Forgot from "../pages/forgotPassword/Forgot";
import Buyer from "../pages/buyer/Buyer";
import Home from "../pages/home/Home";
import Seller from "../pages/seller/Seller";
const ROUTES = [
    { 
        path: "/", 
        key: "ROOT", 
        exact: true, 
        component: () => <Main /> 
    },
    {
        path: "/profile",
        key: "APP",
        component: props => {
            // !localGetter()
            if (!localGetter()) {
              return <Redirect to={"/logIn"} />;
            }
            return <RenderRoutes {...props} /> 
        },
        routes: [
            {
                path: "/profile",
                key: "APP_ROOT",
                exact: true,
                component: () => <Home />,
            },
            {
                path: "/profile/settings",
                key: "APP_SOURCING_INFO",
                exact: true,
                component: () => <Profile />,
            },
            {
                path: "/profile/products",
                key: "APP_PRODUCTS",
                exact: true,
                component: () => <Products />,
            },
            {
                path: "/profile/buyer",
                key: "APP_BUYER",
                component: props => {
                    
                    if (localGetter().tradeRole!=="0") {
                      return <Redirect to={"/profile/seller"} />;
                    }
                    return <RenderRoutes {...props} /> 
                },
                routes: [
                    {
                        path: "/profile/buyer",
                        key: "APP_BUYER",
                        exact: true,
                        component: () => <Buyer />,
                    }
                ],
            },
            {
                path: "/profile/seller",
                key: "APP_SELLER",
                component: props => {
                    
                    if (localGetter().tradeRole!=="1") {
                      return <Redirect to={"/profile/buyer"} />;
                    }
                    return <RenderRoutes {...props} /> 
                },
                routes: [
                    {
                        path: "/profile/seller",
                        key: "APP_SELLER",
                        exact: true,
                        component: () => <Seller />,
                    }
                ],
            },
        ],
    },
    { 
        path: "/logIn", 
        key: "LOGIN", 
        exact: true, 
        component: () => <LogIn /> 
    },
    { 
        path: "/signUp", 
        key: "SIGNUP", 
        exact: true, 
        component: () => <SignUp /> 
    },
    { 
        path: "/reset-password", 
        key: "RESET", 
        exact: true, 
        component: () => <Forgot /> 
    }
];



export default ROUTES;
