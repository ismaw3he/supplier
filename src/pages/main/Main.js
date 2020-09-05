import React from "react";
import Account from "../../components/account/Account";

import { connect } from "react-redux";

function Main({userData}) {
  return (
    <div>
      <h2>Home Page</h2>
      <Account />
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

export default connect(mapStateToProps)(Main);