import React from "react";

import {  Redirect } from "react-router-dom";
import {RenderRoutes} from "./RenderRoutes";

import Main from "../pages/main/Main";
import LogIn from "../pages/logIn/LogIn";
import SignUp from "../pages/signUp/SignUp";
import Profile from "../pages/profile/Profile";

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
            
            if (false) {
              alert("You need to log in to access profile routes");
              return <Redirect to={"/"} />;
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
                path: "/profile/page",
                key: "APP_PAGE",
                exact: true,
                component: () => <h1>Profile Page</h1>,
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
    }
];



export default ROUTES;
