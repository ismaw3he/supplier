import React, { useState } from "react";
import { connect } from "react-redux";
import { logInUser } from "../../API/logInUserAPI"

function LogIn({ userData, logInUser }) {
  const [mail, setMail] = useState("")
  const [logInData, setLogInData] = useState({
    Email: "",
    Password: ""
  })
  return (
    <div>
      <h1>Log IN</h1>
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
          userData.mail ? <p>{userData.mail}</p> : null
      }
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