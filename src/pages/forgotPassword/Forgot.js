import React, { useState } from "react";

import {
    Redirect,
    Link
} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import {
    Form
} from 'semantic-ui-react'

import adidas from "../../img/logo-adidas.png"
import shopify from "../../img/logo-shopify.png"
import tnv from "../../img/logo-the.png"
import colombia from "../../img/logo-colombia.png"
import puma from "../../img/logo-puma.png"
import nike from "../../img/logo-nike.png"
import bck from "../../img/bck-3.jpg"



function Forgot() {
    return (
        <div className="main">
            <div className="sign-left-window" style={{ backgroundImage: `url(${bck})` }}>
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

            <div className="sign-right-container">
                <div className="sign-container-fixed">
                    <div className="route-options-wide">
                        <Link className="sign-links" to="/logIn">Sign In</Link>
                        <div className="divider"></div>
                        <Link className="sign-links" to="/signUp">Register</Link>
                        <div className="divider"></div>
                        <Link className="sign-links" to="/">Home Page</Link>
                    </div>
                    <Form className="custom-form">
                        <h2 className="form-header">Retrieve password</h2>
                        <p id="form-header-info">
                            Lost your password?
                            Please enter your username or email address.
                            You will receive a link to create a new password via email.
                        </p>
                        <div className="input-container">
                            <Form.Field>
                                <label>Email</label>
                                <input
                                    placeholder='Enter email address or member ID'
                                //   onChange={(e) => { setLogInData({ ...logInData, Email: e.target.value }) }}
                                />
                            </Form.Field>
                        </div>

                        <div className="input-container">

                            <ReCAPTCHA
                                sitekey="6513213651469541651"
                                onChange={() => { }}
                            />
                        </div>

                        <button
                            type="submit"
                            //   onClick={() => { logInUser(logInData) }}
                            className="form-submit-btn disabled">
                            Submit
            </button >

                        <p className="self-center">Don't have an account? <Link className="sign-links bold" to="/signUp">Register</Link></p>

                    </Form>
                </div>

            </div>
        </div>
    )
}



export default Forgot;