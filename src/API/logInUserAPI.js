import {
    logInUserRequest,
    logInUserSuccess,
    logInUserFailure
} from "../redux/index"
import url from "./url";

import axios from "axios"

export const logInUser = (logInData) =>{
    return (dispatch) =>{
      console.log(logInData)
        dispatch(logInUserRequest())
        axios.post(url + '/api/Auth/SignIn', {
            Email: logInData.Email,
            Password: logInData.Password
          })
          .then((response) => {
            dispatch(logInUserSuccess(response.data))
          }, (error) => {
            dispatch(logInUserFailure(error.response.data.message))
          });
    }
}  