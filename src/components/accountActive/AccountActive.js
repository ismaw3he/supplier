import React from "react";
import "./style/style.css"

import user from "../account/img/user.png";

export default function AccountActive(props) {
    return (
        <div className="account-active-container">
            <div className="fixed-240">
                <div className="account-active-info-container">
                    <div className="account-active-avatar-container">
                        <img src={user} className="user-account-img" alt="User" />
                    </div>
                    <div className="account-active-info-text-container">
                        <h4 className="account-full-name noselect">{props.fullName}</h4>
                        <p>See your settings</p>
                    </div>

                </div>

                <div className="account-active-divider"></div>

                <div className="account-active-link">
                    <p className="account-active-link-text">Feedback</p>
                </div>

                <div className="account-active-divider"></div>

                <div className="account-active-link">
                    <p className="account-active-link-text">Help & Support</p>
                </div>

                <div className="account-active-divider"></div>

                <div className="account-active-link">
                    <p className="account-active-link-text">Sign Out</p>
                </div>

                <div className="account-active-divider"></div>
            </div>
        </div>
    )
}