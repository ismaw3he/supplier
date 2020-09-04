import React from 'react';
import user from "./img/user.png";
import "./style/style.css"

import {
    Link
} from "react-router-dom"

function Account(props) {
    return (
        <div className="account-container">
            <div className="user-account-img-container">
                <img src={user} className="user-account-img" alt="User" />
            </div>
            <div className="links-container">
                <Link className="sign-links" to="/logIn">Sign In</Link>
                <Link className="sign-links" to="/signUp">Join free</Link>
            </div>
            
        </div>
    );
}

export default Account;