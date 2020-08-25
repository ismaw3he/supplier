import React, {useState} from "react";
import {connect} from "react-redux";
import { signInUser } from "../../API/signInUserAPI"

function SignIn({ userData, signInUser }){
  const [mail, setEmail] = useState("")
  return (
      <div>
          <h1>Sign IN</h1>
          <input  
          type={"text"} 
          value={mail} 
          placeholder={"Mail"}
          onChange={(e)=>{setEmail(e.target.value)}}
          />
          <button onClick={()=>{signInUser(mail)}}>Sign In</button>
          {userData.loading? <p>Loading...</p>:
            userData.error? <p>{userData.error}</p>:
            userData.mail? <p>{userData.mail}</p> : null
          }
      </div>
  )
}

const mapStateToProps = state =>{
  return {
      userData : state.signIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signInUser: (mail) =>{dispatch(signInUser(mail))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);