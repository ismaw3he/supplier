import React, { useState } from 'react';
import user from "./img/user.png";
import "./style/style.css"
import AccountActive from "../accountActive/AccountActive";

import {
    Link
} from "react-router-dom"

function Account(props) {
    const [active, setActive] = useState(false)
    if (props.loggedIn) {
        return (
            <div
            onMouseEnter={() => { setActive(true) }}
            onMouseLeave={() => { setActive(false) }}
            
                // onClick={() => { setActive(!active) }}
              className="account-container">
                <div className="user-account-img-container">
                    <img src={user} className="user-account-img" alt="User" />
                </div>
                <p className="account-full-name noselect">{props.fullName}</p>
                <div className="arrow-down"></div>
                {active ?
                    <AccountActive fullName={props.fullName}/> : null}
            </div>
        );
    } else {
        return (
            <div className="account-container">
                <Link className="button-white"  to="/logIn">Log In</Link>
                <Link className="button-orange" to="/signUp">Register</Link>
            </div>
        );
    }

}

export default Account;