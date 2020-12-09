import React from "react";
import "./style/style.css"
import {
    Link
} from "react-router-dom";
import user from "../account/img/user.png";
import {
    logOutUser
} from "../../redux/index"
import { connect } from "react-redux";

// import localGetter from "../../generals/localGetter";

const AccountActive = (props) => {
    return (
        <div className="account-active-container">
            <div className="fixed-240">
                <Link to="/profile" className="account-active-info-container">
                    <div className="account-active-avatar-container">
                        <img src={user} className="user-account-img" alt="User" />
                    </div>
                    <div className="account-active-info-text-container">
                        <h4 className="account-full-name noselect">{props.fullName}</h4>
                        <p className=" noselect">See your profile</p>
                    </div>
                </Link>

                <div className="account-active-divider"></div>
                <Link className="account-active-link" 
                // to={localGetter().tradeRole === 0? "/profile/buyer" : "/profile/seller"} 
                to="/settings"
                >
                    <p className="account-active-link-text">Settings</p>
                </Link>
{/* 
                <div className="account-active-divider"></div>

                <Link className="account-active-link" to="/profile/seller">
                    <p className="account-active-link-text">Seller</p>
                </Link> */}

                <div className="account-active-divider"></div>

                <Link onClick={() => {
                    localStorage.clear();
                    props.logOutUser();
                }} className="account-active-link" to="/">
                    <p className="account-active-link-text">Sign Out</p>
                </Link>

                <div className="account-active-divider"></div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logOutUser: () => { dispatch(logOutUser()) }
    }
}

export default connect(null, mapDispatchToProps)(AccountActive);