import React from "react";

import {  Redirect } from "react-router-dom";
import {RenderRoutes} from "./RenderRoutes";
import localGetter from "../generals/localGetter";

import Main from "../pages/main/Main";
import LogIn from "../pages/logIn/LogIn";
import SignUp from "../pages/signUp/SignUp";
import Profile from "../pages/profile/Profile";
import Forgot from "../pages/forgotPassword/Forgot";
import Buyer from "../pages/buyer/Buyer";

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
                component: () => <Profile />,
            },
            {
                path: "/profile/sourcing-info",
                key: "APP_SOURCING_INFO",
                exact: true,
                component: () => <h1>Profile Sourcing Info</h1>,
            },
            {
                path: "/profile/buyer",
                key: "APP_BUYER",
                component: props => {
                    
                    if (false) {
                      alert("You need to log in to access buyer routes");
                      return <Redirect to={"/"} />;
                    }
                    return <RenderRoutes {...props} /> 
                },
                routes: [
                    {
                        path: "/profile/buyer",
                        key: "APP_BUYER",
                        exact: true,
                        component: () => <Buyer />,
                    },
                    {
                        path: "/profile/buyer/company-info",
                        key: "APP_BUYER_COMPANY_INFO",
                        exact: true,
                        component: () => <h1>Buyer Profile Company Info</h1>,
                    },
                    {
                        path: "/profile/buyer/general-info",
                        key: "APP_BUYER_GENERAL_INFO",
                        exact: true,
                        component: () => <h1>Buyer Profile General Info</h1>,
                    }
                ],
            },
            {
                path: "/profile/seller",
                key: "APP_SELLER",
                component: props => {
                    
                    if (false) {
                      alert("You need to log in to access buyer routes");
                      return <Redirect to={"/"} />;
                    }
                    return <RenderRoutes {...props} /> 
                },
                routes: [
                    {
                        path: "/profile/seller",
                        key: "APP_SELLER",
                        exact: true,
                        component: () => <h1>Seller Profile</h1>,
                    },
                    {
                        path: "/profile/seller/company-details",
                        key: "APP_SELLER_COMPANY_DETAILS",
                        exact: true,
                        component: () => <h1>Seller Profile Company details</h1>,
                    },
                    {
                        path: "/profile/seller/business-verification",
                        key: "APP_SELLER_BUSINESS_VERIFICATION",
                        exact: true,
                        component: () => <h1>Seller Profile Business Verification</h1>,
                    },
                    {
                        path: "/profile/seller/company-introduction",
                        key: "APP_SELLER_COMPANY_INTRODUCTION",
                        exact: true,
                        component: () => <h1>Seller Profile Company Introduction</h1>,
                    },
                    {
                        path: "/profile/seller/export-capability",
                        key: "APP_SELLER_EXPORT_CAPABILITY",
                        exact: true,
                        component: () => <h1>Seller Profile Export Capability</h1>,
                    },
                    {
                        path: "/profile/seller/manufacturing-capability",
                        key: "APP_SELLER_MANUFACTURING_CAPABILITY",
                        exact: true,
                        component: () => <h1>Seller Profile Manufacturing Capability</h1>,
                    },
                    {
                        path: "/profile/seller/quality-control",
                        key: "APP_SELLER_QUALITY_CONTROL",
                        exact: true,
                        component: () => <h1>Seller Profile Quality Control</h1>,
                    },
                    {
                        path: "/profile/seller/m-manufacturing-capability",
                        key: "APP_SELLER_M_MANUFACTURING_CAPABILITY",
                        exact: true,
                        component: () => <h1>Seller Profile (M) Manufacturing Capability</h1>,
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
