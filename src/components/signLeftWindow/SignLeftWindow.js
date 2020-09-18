import React from "react";
import "./style/style.css";
import adidas from "./img/logo-adidas.png"
import shopify from "./img/logo-shopify.png"
import tnv from "./img/logo-the.png"
import colombia from "./img/logo-colombia.png"
import puma from "./img/logo-puma.png"
import nike from "./img/logo-nike.png"

function SignLeftWindow(props) {
    return (
        <div className="sign-left-window" style={{ backgroundImage: `url(${props.bck})` }}>
            <div className="gradient">
                <div className="sign-left-window-container">
                    <div className="container-box-1">
                        <h2>YOUR LOGO.</h2>
                    </div>
                    <div className="container-box-2">
                        <h3>Alexa, Turn it up</h3>
                        <h1 className="box-header">All-new Echo 3rd </h1>
                        <h1 className="box-header">Generation</h1>
                        <h3 className="light">Company helps us to beorganized our team never like before.
                        Amazing tool for small size organiztion and startups. Highly
                            recomended</h3>
                        <h4>Shane McGree <span className="light-1">Director, Forbes Inc</span></h4>
                    </div>
                    <div className="container-box-3">
                        <img className="the" src={tnv} alt="the north face" />
                        <img className="shopify" src={shopify} alt="shopify" />
                        <img className="colombia" src={colombia} alt="colombia" />
                        <img className="puma" src={puma} alt="puma" />
                        <img className="nike" src={nike} alt="nike" />
                        <img className="adidas" src={adidas} alt="adidas" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignLeftWindow;