import React, { useState } from "react";
import { connect } from "react-redux";
import { logInUser } from "../../API/logInUserAPI"
import { GoogleLogin } from 'react-google-login';
import { googleResponse } from "../../API/googleAuthAPI";

import {
  Redirect,
  Link
} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import {
  Form,
  Select,
  Radio
} from 'semantic-ui-react'

import adidas from "../../img/logo-adidas.png"
import shopify from "../../img/logo-shopify.png"
import tnv from "../../img/logo-the.png"
import colombia from "../../img/logo-colombia.png"
import puma from "../../img/logo-puma.png"
import nike from "../../img/logo-nike.png"
import bck from "../../img/bck-1.jpg"

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

const googleAuthFail = (response)=>{
  console.log(response)
  alert(response)
}


function LogIn({ userData, logInUser, googleResponse }) {
  const [logInData, setLogInData] = useState({
    Email: "",
    Password: ""
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
          <div className="route-options">
            <Link className="sign-links" to="/signUp">Register</Link>
            <div className="divider"></div>
            <Link className="sign-links" to="/">Home Page</Link>
          </div>
          <Form className="custom-form">
            <h2 className="form-header">Sign In</h2>
            <p id="form-header-info">
              Log in with your data that you entered during your registration
            </p>
            <div className="input-container">
              <Form.Field>
                <label>Email</label>
                <input
                  placeholder='Enter email address or member ID'
                  onChange={(e) => { setLogInData({ ...logInData, Email: e.target.value }) }}
                />
              </Form.Field>
            </div>

            <div className="input-container">
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder='Enter your Password'
                  onChange={(e) => { setLogInData({ ...logInData, Password: e.target.value }) }}
                />
              </Form.Field>
            </div>

            <div className="input-container-flex">
              <Form.Checkbox
                label='Remember me'
              />

              <Link className="sign-links bold" to="/reset-password">Forgot Password</Link>
            </div>

            <button
              type="submit"
              onClick={() => { logInUser(logInData) }}
              className="form-submit-btn">
              Sign In
            </button >

            <div className="sign-content-divider-container">
              <div className="sign-content-divider"></div>
              <p className="or">or</p>
              <div className="sign-content-divider"></div>
              </div>

            <div className="input-container">
              <GoogleLogin
                clientId={"236063375563-amqjpkg9ik1fmfccqfhu9sti1h7u9u0o.apps.googleusercontent.com"}
                render={renderProps => (
                  <button onClick={renderProps.onClick} id="google-btn">
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
                onSuccess={(response) => { googleResponse(response) }}
                onFailure={(response) => { googleAuthFail(response) }}
              />
            </div>

            <p className="self-center">Don't have an account? <Link className="sign-links bold" to="/signUp">Register</Link></p>
            {console.log(userData)}
          </Form>
          {userData.loading ? <p>Loading...</p> :
            userData.error ? <p>{userData.error}</p> :
              userData.user.email ?
                <Redirect to="/" />
                : null
          }
        </div>

      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.logIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logInUser: (logInData) => { dispatch(logInUser(logInData)) },
    googleResponse: (response) => { dispatch(googleResponse(response)) }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);