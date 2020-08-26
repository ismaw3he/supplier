import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpUser } from "../../API/signUpUserAPI"

function SignUp({ userData, signUpUser }) {
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
    <div>
      <h1>Sign UP</h1>
      <div>
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
          onChange={(e) => { setSignUpData({ ...signUpData, Country: e.target.value })}}
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
        <input
          type={"text"}
          value={signUpData.TradeRole}
          placeholder={"TradeRole"}
          onChange={(e) => { setSignUpData({ ...signUpData, TradeRole: e.target.value }) }}
        />
      </div>
      <div>
        <input
          type={"text"}
          value={signUpData.PhoneNumber}
          placeholder={"PhoneNumber"}
          onChange={(e) => { setSignUpData({ ...signUpData, PhoneNumber: e.target.value }) }}
        />
      </div>
      <div>
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
      {/* {userData.loading ? <p>Loading...</p> :
        userData.error ? <p>{userData.error}</p> :
          userData.mail ? <p>{userData.mail}</p> : null
      } */}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.signUp
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUpUser: (signUpData) => { dispatch(signUpUser(signUpData)) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);