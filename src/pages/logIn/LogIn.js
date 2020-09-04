import React, { useState } from "react";
import { connect } from "react-redux";
import { logInUser } from "../../API/logInUserAPI"

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

function LogIn({ userData, logInUser }) {
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

            <p className="self-center">Don't have an account? <Link className="sign-links bold" to="/signUp">Register</Link></p>

          </Form>
          {/* {data.loading ? <p>Loading...</p> :
            data.error ? <p>{data.error}</p> :
              data.email ?
                <Redirect to="/logIn" />
                : null
          } */}
        </div>

      </div>

      {/* <h1>Log IN</h1>
      <input
        type={"text"}
        value={logInData.Email}
        placeholder={"Mail"}
        onChange={(e) => { setLogInData({ ...logInData, Email: e.target.value }) }}
      />

      <input
        type={"text"}
        value={logInData.Password}
        placeholder={"Password"}
        onChange={(e) => { setLogInData({ ...logInData, Password: e.target.value }) }}
      />
      <button onClick={() => { logInUser(logInData) }}>Log In</button>
      {userData.loading ? <p>Loading...</p> :
        userData.error ? <p>{userData.error}</p> :
          userData.user.name && userData.isAuthenticated ?
            <div>
              <h2>Logged in as {userData.user.name} {userData.user.surname}</h2>
              <h5>Company Name: {userData.user.companyName}</h5>
              <h5>Country: {userData.user.country}</h5>
              <h5>Email: {userData.user.email}</h5>
              <h5>Phone Number: {userData.user.phoneNumber}</h5>
              <h5>Trade Role: {userData.user.tradeRole}</h5>
            </div> : null
      } */}
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
    logInUser: (logInData) => { dispatch(logInUser(logInData)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);