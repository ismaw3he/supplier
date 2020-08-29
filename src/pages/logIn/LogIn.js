import React, { useState } from "react";
import { connect } from "react-redux";
import { logInUser } from "../../API/logInUserAPI"

function LogIn({ userData, logInUser }) {
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
          userData.user.name && userData.isAuthenticated ?
            <div>
              <h2>Logged in as {userData.user.name} {userData.user.surname}</h2>
              <h5>Company Name: {userData.user.companyName}</h5>
              <h5>Country: {userData.user.country}</h5>
              <h5>Email: {userData.user.email}</h5>
              <h5>Phone Number: {userData.user.phoneNumber}</h5>
              <h5>Trade Role: {userData.user.tradeRole}</h5>
            </div> : null
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