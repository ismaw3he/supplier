import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../../API/signUpUserAPI"

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

import adidas from "./img/logo-adidas.png"
import shopify from "./img/logo-shopify.png"
import tnv from "./img/logo-the.png"
import colombia from "./img/logo-colombia.png"
import puma from "./img/logo-puma.png"
import nike from "./img/logo-nike.png"
import bck from "./img/clothes-2.jpg"
import "./style.css"

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



function SignUp({ data, signUpUser }) {
  // const [mail, setEmail] = useState("")
  const [signUpData, setSignUpData] = useState({
    Name: "",
    Surname: "",
    Country: "",
    CompanyName: "",
    TradeRole: "",
    PhoneNumber: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""
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
            <Link className="sign-links" to="/logIn">Sign In</Link>
            <div className="divider"></div>
            <Link className="sign-links" to="/">Home Page</Link>
          </div>
          <Form className="custom-form">
            <h2 className="form-header">Register</h2>
            <div className="input-container">
              <Form.Field
                control={Select}
                label='Country/region'
                options={options.country}
                placeholder='Choose country'
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
                    checked={true}
                    onChange={() => { }}
                  />
                  <Form.Field
                    control={Radio}
                    label='Seller'
                    value='1'
                    checked={true}
                    onChange={() => { }}
                  />
                  <Form.Field
                    control={Radio}
                    label='Both'
                    value='2'
                    checked={true}
                    onChange={() => { }}
                  />
                </Form.Group>
              </Form.Group>
            </div>
            <div className="input-container">
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email will be used as Login ID' />
              </Form.Field>
            </div>
            <div className="input-container">
              <Form.Field>
                <label>Password</label>
                <input type="password" placeholder='Enter your Password' />
              </Form.Field>
            </div>
            <div className="input-container">
              <Form.Field>
                <label>Confirm Password</label>
                <input type="password" placeholder='Enter your Password again' />
              </Form.Field>
            </div>

            <div className="input-container">
              <Form.Field>
                <label>Company name</label>
                <input placeholder='Your company' />
              </Form.Field>
            </div>

            <div className="input-container">
              <Form.Group widths='equal'>
                <Form.Input fluid label='First name' placeholder='Your first name' />
                <Form.Input fluid label='Last name' placeholder='Your last name' />
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
                />
                <Form.Input fluid label='Phone Number' placeholder='Your number' width={10} />
              </Form.Group>
            </div>
            <div className="input-container">
              <ReCAPTCHA
                sitekey="6513213651469541651"
                onChange={() => { }}
              />
            </div>
            <div className="input-container">
              <Form.Checkbox label='I agree to the Terms and Conditions' />
            </div>

            <div className="form-submit-btn">
              Agree and Register
            </div>

          </Form>

        </div>
      </div>
      {/* <div>
        <input
          type={"text"}
          value={signUpData.Name}
          placeholder={"Name"}
          onChange={(e) => { setSignUpData({ ...signUpData, Name: e.target.value }) }}
        />
      </div>
      <div>
        <input
          type={"text"}
          value={signUpData.Surname}
          placeholder={"Surname"}
          onChange={(e) => { setSignUpData({ ...signUpData, Surname: e.target.value }) }}
        />
      </div>
      <div>
        <input
          type={"text"}
          value={signUpData.Country}
          placeholder={"Country"}
          onChange={(e) => { setSignUpData({ ...signUpData, Country: e.target.value }) }}
        />
      </div>
      <div>
        <input
          type={"text"}
          value={signUpData.CompanyName}
          placeholder={"CompanyName"}
          onChange={(e) => { setSignUpData({ ...signUpData, CompanyName: e.target.value }) }}
        />
      </div>
      <div>
        <p>(0 or 1 required)</p>
        <input
          type={"text"}
          value={signUpData.TradeRole}
          placeholder={"TradeRole"}
          onChange={(e) => { setSignUpData({ ...signUpData, TradeRole: e.target.value }) }}
        />
      </div>
      <div>
      <p>(number required)</p>
        <input
          type={"text"}
          value={signUpData.PhoneNumber}
          placeholder={"PhoneNumber"}
          onChange={(e) => { setSignUpData({ ...signUpData, PhoneNumber: e.target.value }) }}
        />
      </div>
      <div>
      <p>(email required)</p>
        <input
          type={"text"}
          value={signUpData.Email}
          placeholder={"Mail"}
          onChange={(e) => { setSignUpData({ ...signUpData, Email: e.target.value }) }}
        />
      </div>
      <div>
        <input
          type={"text"}
          value={signUpData.Password}
          placeholder={"Password"}
          onChange={(e) => { setSignUpData({ ...signUpData, Password: e.target.value }) }}
        />
      </div>
      <div>
        <input
          type={"text"}
          value={signUpData.ConfirmPassword}
          placeholder={"ConfirmPassword"}
          onChange={(e) => { setSignUpData({ ...signUpData, ConfirmPassword: e.target.value }) }}
        />
      </div>
      <button onClick={() => { signUpUser(signUpData) }}>Sign Up</button>
      {data.loading ? <p>Loading...</p> :
        data.error ? <p>{data.error}</p> :
          data.email ?
            <Redirect to="/logIn" />             
            : null
      } */}

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
    signUpUser: (signUpData) => { dispatch(signUpUser(signUpData)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);