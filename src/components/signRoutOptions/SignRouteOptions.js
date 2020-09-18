import React from "react";
import "./style/style.css";

import {
    Link
} from "react-router-dom";

function SignRouteOptions(props) {
    if (props.Option === "signIn") {
        return (
            <div className="route-options">
                <Link className="sign-links" to="/signUp">Register</Link>
                <div className="divider"></div>
                <Link className="sign-links" to="/">Home Page</Link>
            </div>
        )
    }
    else if (props.Option === "signUp") {
        return (
            <div className="route-options">
                <Link className="sign-links" to="/logIn">Sign In</Link>
                <div className="divider"></div>
                <Link className="sign-links" to="/">Home Page</Link>
            </div>
        )
    }
    else if (props.Option === "forgot") {
        return (
            <div className="route-options-wide">
                <Link className="sign-links" to="/logIn">Sign In</Link>
                <div className="divider"></div>
                <Link className="sign-links" to="/signUp">Register</Link>
                <div className="divider"></div>
                <Link className="sign-links" to="/">Home Page</Link>
            </div>
        )
    }

}
export default SignRouteOptions