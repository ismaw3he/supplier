import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
import "./style/style.css"

import homeIcon from "./img/home-copy.svg";
import messageIcon from "./img/mail-copy.svg";
import diagramIcon from "./img/diagram.svg";
import documentIcon from "./img/document-copy.svg";
import internetIcon from "./img/internet.svg";
import likeIcon from "./img/like.svg";
import audioIcon from "./img/audio.svg";
import powerIcon from "./img/power.svg";

function LeftMenu(props) {
    const [active, setActive] = useState(false)
    return (
        <div className="left-menu-container">
            <div className="left-top-container">
                <div className="left-logo-container">
                    <h1>YOUR LOGO.</h1>
                </div>
                <div className="burger-menu">
                    <div className="burger-menu-line"></div>
                    <div className="burger-menu-line"></div>
                    <div className="burger-menu-line"></div>
                </div>
            </div>
            <div className="left-menu-options-container">
                <div className="left-menu-seperator">
                    <div className="left-menu-single-container">
                        <div className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={homeIcon} alt="Home Icon" />
                            </div>
                            <Link className="left-menu-option-text" to="/">Home</Link>
                        </div>
                    </div>

                    <div className="left-menu-single-container">
                        <div className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={messageIcon} alt="Home Icon" />
                            </div>
                            <Link className="left-menu-option-text" to="/">Messages</Link>
                        </div>
                    </div>
                    <div className="left-menu-single-container">
                        <div className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={diagramIcon} alt="Home Icon" />
                            </div>
                            <Link className="left-menu-option-text" to="/">Buying Leads</Link>
                        </div>
                    </div>
                    <div className="left-menu-single-container">
                        <div className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={documentIcon} alt="Home Icon" />
                            </div>
                            <Link className="left-menu-option-text" to="/">Orders</Link>
                        </div>
                    </div>
                    <div className="left-menu-single-container">
                        <div className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={internetIcon} alt="Home Icon" />
                            </div>
                            <Link className="left-menu-option-text" to="/">Trade Services</Link>
                        </div>
                    </div>
                </div>
                <div className="left-menu-seperator">
                    <div className="left-menu-single-container">
                        <div className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={likeIcon} alt="Home Icon" />
                            </div>
                            <Link className="left-menu-option-text" to="/">Feedback</Link>
                        </div>
                    </div>
                    <div className="left-menu-single-container">
                        <div className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={audioIcon} alt="Home Icon" />
                            </div>
                            <Link className="left-menu-option-text" to="/">Help & Support</Link>
                        </div>
                    </div>
                    <div className="left-menu-single-container">
                        <div className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={powerIcon} alt="Home Icon" />
                            </div>
                            <Link className="left-menu-option-text" to="/">Sign Out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LeftMenu;