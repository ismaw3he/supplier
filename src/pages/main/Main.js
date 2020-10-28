import React from "react";
// import Account from "../../components/account/Account";
import localGetter from "../../generals/localGetter";
import Temporary from "../../temp/Temporary";

import { connect } from "react-redux";

function Main({userData}) {
  return (
    <div>

      {/* <h2 style={{margin: "30vh auto"}}>Test Mode - HOME PAGE</h2>
      <Account loggedIn={localGetter()} fullName={localGetter()? localGetter().name + " " + localGetter().surname : ""}/>
       */}
       <Temporary localData={localGetter()}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.logIn
  }
}

export default connect(mapStateToProps)(Main);