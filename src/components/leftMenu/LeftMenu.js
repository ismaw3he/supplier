import React from 'react';
import {
    Link
} from "react-router-dom";
import "./style/style.css"
import {
    logOutUser
  } from "../../redux/index"
  import { connect } from "react-redux";
import homeIcon from "./img/home-copy.svg";
import messageIcon from "./img/mail-copy.svg";
import diagramIcon from "./img/diagram.svg";
import documentIcon from "./img/document-copy.svg";
import likeIcon from "./img/like.svg";
import audioIcon from "./img/audio.svg";
import powerIcon from "./img/power.svg";
import bulb from "./img/idea.svg";
import products from "./img/layout.svg";
function LeftMenu(props) {
    const {active, setActive} = props
    return (
        <div
        onMouseEnter={() => { setActive(true) }}
        onMouseLeave={() => { setActive(false) }}
            className={active? "left-menu-container" : "left-menu-container left-menu-closed"}
        >
            <div className="left-top-container">
                <Link to="/" className="left-logo-container">
                    <h1>YOUR LOGO.</h1>
                </Link>
                <div 

                // onClick={() => { setActive(!active) }} 
                
                className="burger-menu">
                    <div className={active? "burger-menu-line" : "burger-menu-line short-line"}></div>
                    <div className="burger-menu-line"></div>
                    <div className="burger-menu-line"></div>
                </div>
            </div>
            <div className="left-menu-options-container">
                <div className="left-menu-seperator">
                    <div className="left-menu-single-container">
                        <Link to="/profile" className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={homeIcon} alt="Home Icon" />
                            </div>
                            <div className="left-menu-option-text">Home</div>
                        </Link>
                    </div>

                    <div className="left-menu-single-container">
                        <div className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={messageIcon} alt="Home Icon" />
                            </div>
                            <Link className="left-menu-option-text" to="/profile">Messages</Link>
                        </div>
                    </div>
                    <div className="left-menu-single-container">
                        <div className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={diagramIcon} alt="Home Icon" />
                            </div>
                            <Link className="left-menu-option-text" to="/profile">Buying Leads</Link>
                        </div>
                    </div>
                    <div className="left-menu-single-container">
                        <div className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={documentIcon} alt="Home Icon" />
                            </div>
                            <Link className="left-menu-option-text" to="/profile">Orders</Link>
                        </div>
                    </div>
                    <div className="left-menu-single-container">
                        <Link to="/profile/products" className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={products} alt="Home Icon" />
                            </div>
                            <div className="left-menu-option-text">Products</div>
                        </Link>
                    </div>
                    <div className="left-menu-single-container">
                        <Link to="/profile/buyer" className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={bulb} alt="Home Icon" />
                            </div>
                            <div className="left-menu-option-text">Company & Site</div>
                        </Link>
                    </div>
                </div>
                <div className="left-menu-seperator">
                    <div className="left-menu-single-container">
                        <div className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={likeIcon} alt="Home Icon" />
                            </div>
                            <Link className="left-menu-option-text" to="/profile">Feedback</Link>
                        </div>
                    </div>
                    <div className="left-menu-single-container">
                        <div className="left-menu-option">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={audioIcon} alt="Home Icon" />
                            </div>
                            <Link className="left-menu-option-text" to="/profile">Help & Support</Link>
                        </div>
                    </div>
                    <div className="left-menu-single-container">
                        <Link onClick={()=>{
                            localStorage.clear();
                            props.logOutUser();
                            }} className="left-menu-option"  to="/">
                            <div className="left-menu-option-icon-container">
                                <img className="left-menu-option-icon" src={powerIcon} alt="Home Icon" />
                            </div>
                            <p className="left-menu-option-text">Sign Out</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

const mapDispatchToProps = dispatch => {
    return {
      logOutUser: () => { dispatch(logOutUser()) }
    }
  }

export default connect(null,mapDispatchToProps)(LeftMenu);