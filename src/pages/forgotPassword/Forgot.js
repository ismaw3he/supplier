import React, { useState } from "react";
import { connect } from "react-redux";
import { forgotPassword } from "../../API/forgotPasswordAPI";

import {
    Link
} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import {
    Form
} from 'semantic-ui-react'

import bckImage from "./img/bck-3.jpg"
import SignLeftWindow from "../../components/signLeftWindow/SignLeftWindow";
import SignRouteOptions from "../../components/signRoutOptions/SignRouteOptions";

function Forgot({ data, forgotPSWD }) {
    const [forgotData, setForgotData] = useState({
        Email: "",
        recaptcha: false
    })
    return (
        <div className="main">
            <SignLeftWindow bck={bckImage} />

            <div className="sign-right-container">
                <div className="sign-container-fixed">

                    <SignRouteOptions Option="forgot" />

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
                                    onClick={() => {if(forgotData.recaptcha && forgotData.Email){ forgotPSWD(forgotData.Email) }}}
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