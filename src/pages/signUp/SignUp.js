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


import Input from "../../components/Input/Input";
import {validation} from "../../generals/validation";

const options = {
  country: [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', text: 'Australia' },
    { key: 'at', value: 'at', text: 'Austria' },
    { key: 'az', value: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', text: 'Belgium' },
    { key: 'ru', value: 'ru', text: 'Russia' },
    { key: 'tr', value: 'tr', text: 'Turkey' },
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
    Country: "Turkey",
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

  const [inputData, setInputData] = useState({
    isFormValid: false,
    Email: {
      elementType: 'input',
      elementConfig: {
        type: "text",
        placeholder: "Enter email address or member ID"
      },
      value: '',
      rules: {
        required: true,
        isEmail: true
      },
      isValid: false,
      validationMessages: []
    },
    Password: {
      elementType: 'input',
      elementConfig: {
        type: "password",
        placeholder: "Enter your password"
      },
      value: '',
      rules: {
        required: true,
        minLength: 6
      },
      isValid: false,
      validationMessages: []
    },
    ConfirmPassword: {
      elementType: 'input',
      elementConfig: {
        type: "password",
        placeholder: "Enter your password again"
      },
      value: '',
      rules: {
        required: true,
        minLength: 6
      },
      isValid: false,
      validationMessages: []
    },
    CompanyName:{
      elementType: 'input',
      elementConfig: {
        type: "text",
        placeholder: "Enter your Company name"
      },
      value: '',
      rules: {
        required: true
      },
      isValid: false,
      validationMessages: []
    },
    PhonePrefix: {
      elementType: 'input',
      elementConfig: {
        options: [
          { key: '+994', displayValue: '+994', value: '+994' },
          { key: '+32', displayValue: '+32', value: '+32' },
          { key: '+1', displayValue: '+1', value: '+1' },
        ]
      },
      value: ""
    }
  })
  const inputOnchangeHandler = (event, identifier) => {

    const updatedInputData = { ...inputData };
    updatedInputData[identifier].value = event.target.value;

    const result = validation( event.target.value, updatedInputData[identifier].rules);
    updatedInputData[identifier].isValid = result.isValid;
    updatedInputData[identifier].validationMessages = result.messages;

    let formChecker = true;
    
    for(let key in inputData){
      if(key!=="isFormValid" && key!=="PhonePrefix" && key!=="CompanyName" && !inputData[key].isValid){
        formChecker = false;
      }
    }

    if(formChecker){
      if(updatedInputData.Password.value !== updatedInputData.ConfirmPassword.value){
        updatedInputData.ConfirmPassword.isValid = false;
        updatedInputData.ConfirmPassword.validationMessages.push({status: "error", message:"Passwords do not match"})   
        formChecker=false;
      }
    }
    
    updatedInputData.isFormValid = formChecker;

    setInputData(updatedInputData);
  }
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
                        <label>Email <span style={{color: "red"}}>*</span></label>
                        {/* <input
                          placeholder='Email will be used as Login ID'
                          defaultValue={signUpData.Email}
                          onChange={(e) => { setSignUpData({ ...signUpData, Email: e.target.value }) }}
                        /> */}
                        <Input
                          elementType={inputData.Email.elementType}
                          elementConfig={inputData.Email.elementConfig}
                          value={inputData.Email.value}
                          changed={(event) => inputOnchangeHandler(event, "Email")}
                        />
                        {inputData.Email.validationMessages.map((item) => {
                          return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })}

                      </Form.Field>
                    </div>

                    <div className="input-container">
                      <Form.Field>
                        <label>Password <span style={{color: "red"}}>*</span></label>
                        {/* <input
                          type="password"
                          placeholder='Enter your Password'
                          defaultValue={signUpData.Password}
                          onChange={(e) => { setSignUpData({ ...signUpData, Password: e.target.value }) }}
                        /> */}
                        <Input
                          elementType={inputData.Password.elementType}
                          elementConfig={inputData.Password.elementConfig}
                          value={inputData.Password.value}
                          changed={(event) => inputOnchangeHandler(event, "Password")}
                        />
                        {inputData.Password.validationMessages.map((item) => {
                          return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })}
                      </Form.Field>
                    </div>

                    <div className="input-container">
                      <Form.Field>
                        <label>Confirm Password <span style={{color: "red"}}>*</span></label>
                        {/* <input
                          type="password"
                          defaultValue={signUpData.ConfirmPassword}
                          placeholder='Enter your Password again'
                          onChange={(e) => {
                            console.log(signUpData);
                            setSignUpData({ ...signUpData, ConfirmPassword: e.target.value })
                          }}
                        /> */}
                        <Input
                          elementType={inputData.ConfirmPassword.elementType}
                          elementConfig={inputData.ConfirmPassword.elementConfig}
                          value={inputData.ConfirmPassword.value}
                          changed={(event) => inputOnchangeHandler(event, "ConfirmPassword")}
                        />
                        {inputData.ConfirmPassword.validationMessages.map((item) => {
                          return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })}
                      </Form.Field>
                    </div>



                    <button
                      onClick={() => {
                        if (
                          inputData.Email.isValid &&
                          inputData.Password.isValid &&
                          inputData.ConfirmPassword.isValid
                        ) {

                          setSignUpData({ ...signUpData, page: 1 })
                        }
                      }}
                      className={
                        inputData.Email.isValid &&
                        inputData.Password.isValid &&
                        inputData.ConfirmPassword.isValid ?
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
                      <Form.Field
                        control={Select}
                        label='Country/region'
                        options={options.country}
                        placeholder='Choose country'
                        defaultValue={signUpData.Country}
                        onChange={(e) => { setSignUpData({ ...signUpData, Country: e.target.innerText }) }}
                      />

                    <div className="input-container">
                      <Form.Group grouped>
                        <label>Please select trade role <span style={{color: "red"}}>*</span></label>
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
                        <label>Company name <span style={{color: "red"}}>*</span></label>
                        {/* <input
                          placeholder='Your company'
                          defaultValue={signUpData.CompanyName}
                          onChange={(e) => {
                            setSignUpData({ ...signUpData, CompanyName: e.target.value })
                          }}
                        /> */}
                        <Input
                          elementType={inputData.CompanyName.elementType}
                          elementConfig={inputData.CompanyName.elementConfig}
                          value={inputData.CompanyName.value}
                          changed={(event) => inputOnchangeHandler(event, "CompanyName")}
                        />
                        {inputData.CompanyName.validationMessages.map((item) => {
                          return <p key={item.message} className={"validationMessage " + item.status}>{item.message}</p>
                        })}
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
                      onClick={signUpData.page === 1 &&
                        signUpData.Terms &&
                        signUpData.recaptcha &&
                        signUpData.PhoneNumber &&
                        signUpData.Surname &&
                        signUpData.Name &&
                        inputData.CompanyName.isValid &&
                        signUpData.Country 
                        ? () => {
                          let submissionData = {...signUpData}
                          submissionData.CompanyName = inputData.CompanyName.value;
                          submissionData.Email = inputData.Email.value;
                          submissionData.Password = inputData.Password.value;
                          submissionData.ConfirmPassword = inputData.ConfirmPassword.value;
                          // needs to be fixed
                          console.log(submissionData);
                          signUpUser(submissionData)
                           }
                        :                         signUpData.Terms &&
                        signUpData.recaptcha &&
                        signUpData.PhoneNumber &&
                        signUpData.Surname &&
                        signUpData.Name &&
                        inputData.CompanyName.isValid &&
                        signUpData.Country? () => { 
                          let submissionData = {...signUpData}
                          submissionData.CompanyName = inputData.CompanyName.value;
                          submissionData.Email = inputData.Email.value;
                          submissionData.Password = inputData.Password.value;
                          submissionData.ConfirmPassword = inputData.ConfirmPassword.value;
                          // needs to be fixed
                          googleSignUpUser(submissionData)
                         }
                        :null}
                      className={
                        signUpData.Terms &&
                          signUpData.recaptcha &&
                          signUpData.PhoneNumber &&
                          signUpData.Surname &&
                          signUpData.Name &&
                          inputData.CompanyName.isValid &&
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