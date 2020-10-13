import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../../API/signUpUserAPI"
import { googleSignUpUser } from "../../API/googleSignUpAPI"
import { GoogleLogin } from 'react-google-login';

import Loader from "../../components/loader/Loader";
import {
  Redirect,
  Link
} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import bckImage from "./img/bck-2.jpg";

import {
  Form,
  Select,
  Radio
} from 'semantic-ui-react'

import {
  signUpUserFailure
} from "../../redux/index"

import "./style.css"
import SignLeftWindow from "../../components/signLeftWindow/SignLeftWindow";
import SignRouteOptions from "../../components/signRoutOptions/SignRouteOptions";

const options = {
  country: [
    { key: 'a', text: 'Azerbaijan', value: 'Azerbaijan' },
    { key: 't', text: 'Turkey', value: 'Turkey' },
    { key: 'r', text: 'Russia', value: 'Russia' },
  ],
  number: [
    { key: '+994', text: '+994', value: '+994' },
    { key: '+32', text: '+32', value: '+32' },
    { key: '+1', text: '+1', value: '+1' },
  ]
}



function SignUp({ data, signUpUser, errorHandler, googleSignUpUser }) {
  // const [mail, setEmail] = useState("")
  const [signUpData, setSignUpData] = useState({

    Name: "",
    Surname: "",
    Country: "",
    CompanyName: "",
    TradeRole: "0",
    PhoneNumber: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    PhonePrefix: '+994',
    Terms: false,
    recaptcha: false,
    page: 0
  })
  return (
    <div className="main">
      
      <SignLeftWindow bck={bckImage} />

      <div className="sign-right-container">

        <Loader loading={data.loading} />

        <div className="sign-container-fixed">
          <SignRouteOptions Option="signUp" />
          <Form className="custom-form">
            <h2 className="form-header">Register {signUpData.page === 2 ? "with Google" : ""}</h2>
            
            {
              data.email ?
                <div>
                  <p id="form-header-info">
                    We've sent verification link to {data.email} email address.
                  If no email is received within 10 minutes,
                  check that the submitted address is correct.
                </p>

                  <Link className="form-submit-button" to="/logIn">Back to Sign In</Link>
                </div>
                :
                signUpData.page === 0 ?
                  <div>
                    <div className="input-container">
                      <Form.Field>
                        <label>Email</label>
                        <input
                          placeholder='Email will be used as Login ID'
                          defaultValue={signUpData.Email}
                          onChange={(e) => { setSignUpData({ ...signUpData, Email: e.target.value }) }}
                        />
                      </Form.Field>
                    </div>

                    <div className="input-container">
                      <Form.Field>
                        <label>Password</label>
                        <input
                          type="password"
                          placeholder='Enter your Password'
                          defaultValue={signUpData.Password}
                          onChange={(e) => { setSignUpData({ ...signUpData, Password: e.target.value }) }}
                        />
                      </Form.Field>
                    </div>

                    <div className="input-container">
                      <Form.Field>
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          defaultValue={signUpData.ConfirmPassword}
                          placeholder='Enter your Password again'
                          onChange={(e) => { 
                            console.log(signUpData);
                            setSignUpData({ ...signUpData, ConfirmPassword: e.target.value }) }}
                        />
                      </Form.Field>
                    </div>



                    <button
                      onClick={() => {
                        if (signUpData.Email && signUpData.Password && signUpData.ConfirmPassword) {
                          
                          setSignUpData({ ...signUpData, page: 1 })
                        }
                      }}
                      className={signUpData.Email && signUpData.Password && signUpData.ConfirmPassword ?
                        "form-submit-btn" : "form-submit-btn disabled"}>
                      Next
                  </button >

                    <div className="sign-content-divider-container">
                      <div className="sign-content-divider"></div>
                      <p className="or">or</p>
                      <div className="sign-content-divider"></div>
                    </div>
                    {data.error ? <p className="errorMain">{data.error}</p> : null}
                    <div className="input-container">
                      <GoogleLogin
                        clientId={"236063375563-amqjpkg9ik1fmfccqfhu9sti1h7u9u0o.apps.googleusercontent.com"}
                        render={renderProps => (
                          <button
                            onClick={renderProps.onClick}
                            id="google-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" id="google-logo" height="20" viewBox="0 0 20 20">
                              <g fill="none">
                                <path fill="#FBBB00" d="M4.432 12.086l-.696 2.6-2.544.053C.432 13.329 0 11.715 0 10c0-1.658.403-3.222 1.118-4.599l2.266.415.992 2.252c-.207.606-.32 1.256-.32 1.932 0 .734.132 1.437.376 2.086z" />
                                <path fill="#518EF8" d="M19.825 8.132C19.94 8.737 20 9.362 20 10c0 .716-.075 1.414-.219 2.088-.486 2.292-1.758 4.294-3.52 5.71h-.001l-2.853-.146-.404-2.52c1.169-.686 2.083-1.76 2.564-3.044H10.22V8.132h9.605z" />
                                <path fill="#28B446" d="M16.26 17.798C14.547 19.176 12.37 20 10 20c-3.808 0-7.12-2.129-8.808-5.261l3.24-2.653c.845 2.254 3.02 3.859 5.568 3.859 1.096 0 2.122-.297 3.003-.814l3.257 2.667z" />
                                <path fill="#F14336" d="M16.383 2.302l-3.24 2.652c-.911-.57-1.989-.899-3.143-.899-2.607 0-4.821 1.678-5.624 4.013L1.12 5.401C2.781 2.192 6.134 0 10 0c2.426 0 4.651.864 6.383 2.302z" />
                              </g>
                            </svg>
                    Sign up with Google
                          </button>
                        )}
                        onSuccess={(response) => {

                          setSignUpData({
                            ...signUpData,
                            page: 2,
                            Name: response.profileObj.givenName,
                            Surname: response.profileObj.familyName,
                            Email: response.profileObj.email,
                            GoogleTokenId: response.tokenId
                          })
                          // googleResponse(response) 
                        }}
                        onFailure={(response) => {
                          console.log(response.error)
                          errorHandler(response.error)
                          // googleAuthFail(response)
                        }}
                      />
                    </div>
                  </div>
                :

                  <div>
                    <div className="input-container">
                      <Form.Field
                        control={Select}
                        label='Country/region'
                        options={options.country}
                        placeholder='Choose country'
                        defaultValue={signUpData.Country}
                        onChange={(e) => { setSignUpData({ ...signUpData, Country: e.target.innerText }) }}
                      />
                    </div>

                    <div className="input-container">
                      <Form.Group grouped>
                        <label>Please select trade role</label>
                        <Form.Group inline>
                          <Form.Field
                            control={Radio}
                            label='Buyer'
                            value='0'
                            checked={signUpData.TradeRole === "0"}
                            onChange={() => { setSignUpData({ ...signUpData, TradeRole: "0" }) }}
                          />
                          <Form.Field
                            control={Radio}
                            label='Seller'
                            value='1'
                            checked={signUpData.TradeRole === "1"}
                            onChange={() => { setSignUpData({ ...signUpData, TradeRole: "1" }) }}
                          />
                        </Form.Group>
                      </Form.Group>
                    </div>


                    <div className="input-container">
                      <Form.Field>
                        <label>Company name</label>
                        <input
                          placeholder='Your company'
                          defaultValue={signUpData.CompanyName}
                          onChange={(e) => {
                            setSignUpData({ ...signUpData, CompanyName: e.target.value })
                          }}
                        />
                      </Form.Field>
                    </div>


                    <div className="input-container">
                      <Form.Group widths='equal'>
                        <Form.Input
                          fluid
                          label='First name'
                          defaultValue={signUpData.Name}
                          placeholder='Your first name'
                          onChange={(e) => { setSignUpData({ ...signUpData, Name: e.target.value }) }}
                        />
                        <Form.Input
                          fluid
                          label='Last name'
                          defaultValue={signUpData.Surname}
                          placeholder='Your last name'
                          onChange={(e) => { setSignUpData({ ...signUpData, Surname: e.target.value }) }}
                        />
                      </Form.Group>
                    </div>

                    <div className="input-container">
                      <Form.Group>
                        <Form.Select
                          width={6}
                          fluid
                          label='Country'
                          options={options.number}
                          placeholder='+994'
                          value={signUpData.PhonePrefix}
                          onChange={(e) => {
                            setSignUpData({
                              ...signUpData,
                              PhonePrefix: e.target.innerText

                            })
                          }}
                        />
                        <Form.Input
                          fluid
                          label='Phone Number'
                          placeholder='Your number'
                          defaultValue={signUpData.PhoneNumber}
                          width={10}
                          onChange={(e) => { setSignUpData({ ...signUpData, PhoneNumber: e.target.value }) }}
                        />
                      </Form.Group>
                    </div>

                    <div className="input-container">

                      <ReCAPTCHA
                        sitekey="6LcDIMgZAAAAAColV9-Jur_TdxurTGrNpGt-qJvX"
                        onChange={() => { setSignUpData({ ...signUpData, recaptcha: true }) }}
                      />
                    </div>

                    <div className="input-container">
                      <Form.Checkbox
                        label='I agree to the Terms and Conditions'
                        checked={signUpData.Terms}
                        onChange={() => { setSignUpData({ ...signUpData, Terms: !signUpData.Terms }) }}
                      />
                    </div>
                    {data.error ? <p className="errorMain">{data.error}</p> : null}
                    <button
                      type="submit"
                      onClick={signUpData.page === 1 ? () => { signUpUser(signUpData) }
                        : () => { googleSignUpUser(signUpData) }}
                      className={
                        signUpData.Terms &&
                          signUpData.recaptcha &&
                          signUpData.PhoneNumber &&
                          signUpData.Surname &&
                          signUpData.Name &&
                          signUpData.CompanyName &&
                          signUpData.Country ?
                          "form-submit-btn" : "form-submit-btn disabled"}>
                      Agree and Sign Up
                    </button >

                    <button
                      onClick={() => { setSignUpData({ ...signUpData, page: 0 }) }}
                      className="form-submit-btn white">
                      Back
                    </button >

                  </div>
            }



            {!data.email ? <p className="self-center">Have an account? <Link className="sign-links bold" to="/logIn">Sign In</Link></p>

              : null}


          </Form>
          {data.email && signUpData.page === 2 ? <Redirect to="/profile" /> : null}

        </div>

      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    data: state.signUp
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUpUser: (signUpData) => { dispatch(signUpUser(signUpData)) },
    errorHandler: (errorMessage) => dispatch(signUpUserFailure(errorMessage)),
    googleSignUpUser: (signUpData) => { dispatch(googleSignUpUser(signUpData)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);