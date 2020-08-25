import React, {useState} from "react";
import {connect} from "react-redux";
import { signUpUser } from "../../API/signUpUserAPI"
  
  function SignUp({ userData, signUpUser }){
    const [mail, setEmail] = useState("")
      return (
          <div>
              <h1>Sign UP</h1>
              <input  
              type={"text"} 
              value={mail} 
              placeholder={"Mail"}
              onChange={(e)=>{setEmail(e.target.value)}}
              />
              <button onClick={()=>{signUpUser(mail)}}>Sign Up</button>
              {userData.loading? <p>Loading...</p>:
                userData.error? <p>{userData.error}</p>:
                userData.mail? <p>{userData.mail}</p> : null
              }
          </div>
      )
  }
  
  const mapStateToProps = state =>{
      return {
          userData : state.signUp
      }
  }
  
  const mapDispatchToProps = dispatch => {
      return {
        signUpUser: (mail) =>{dispatch(signUpUser(mail))}
      }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);