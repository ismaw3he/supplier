import {
    logInUserRequest,
    logInUserSuccess,
    logInUserFailure
} from "../redux/index"
import url from "./url";

import axios from "axios"

import localSetter from "../generals/localSetter";

export const logInUser = (logInData) =>{
    return (dispatch) =>{
        dispatch(logInUserRequest())
        axios.post(url + '/api/Auth/SignIn', {
            Email: logInData.Email,
            Password: logInData.Password
          })
          .then((response) => {
            console.log(response.data);
            localSetter(response.data)
            dispatch(logInUserSuccess(response.data))
          }, (error) => {
           
            if(error.response){
              console.log(error.response.data)
              dispatch(logInUserFailure(error.response.data))
            }
            else{
              dispatch(logInUserFailure("No Connection"))
            }

          });
    }
}  