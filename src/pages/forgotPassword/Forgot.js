import React, { useState } from "react";
import { connect } from "react-redux";
import { forgotPassword } from "../../API/forgotPasswordAPI";

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



function Forgot({ data, forgotPSWD }) {
    const [forgotData, setForgotData] = useState({
        Email: "",
        recaptcha: false
    })
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
                        {console.log(data)}
                        <Link className="sign-links" to="/logIn">Sign In</Link>
                        <div className="divider"></div>
                        <Link className="sign-links" to="/signUp">Register</Link>
                        <div className="divider"></div>
                        <Link className="sign-links" to="/">Home Page</Link>
                    </div>
                    <Form className="custom-form">
                        <h2 className="form-header">Retrieve password</h2>
                        {
                        !data.success ? <div>
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
                                        onChange={(e) => { setForgotData({ ...forgotData, Email: e.target.value }) }}
                                    />
                                </Form.Field>
                            </div>

                            <div className="input-container">

                                <ReCAPTCHA
                                    sitekey="6LcDIMgZAAAAAColV9-Jur_TdxurTGrNpGt-qJvX"
                                    onChange={() => { setForgotData({ ...forgotData, recaptcha: true }) }}
                                />
                            </div>
                            <button
                                type="submit"
                                onClick={() => { forgotPSWD(forgotData.Email) }}
                                className={forgotData.recaptcha && forgotData.Email ?
                                    "form-submit-btn" : "form-submit-btn disabled"}>
                                Submit
                            </button >

                            <p className="self-center">Don't have an account? <Link className="sign-links bold" to="/signUp">Register</Link></p>
                        </div> :
                            <div>
                                <p id="form-header-info">
                                We've sent password reset instructions to {data.response} email address.
                                    If no email is received within 10 minutes,
                                    check that the submitted address is correct.
                                </p>

                                <Link className="form-submit-button" to="/logIn">Back to Sign In</Link>
                            </div>}

                    </Form>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.forgotPSWD
    }
}

const mapDispatchToProps = dispatch => {
    return {
        forgotPSWD: (Email) => { dispatch(forgotPassword(Email)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forgot);