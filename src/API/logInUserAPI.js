import {
    logInUserRequest,
    logInUserSuccess,
    logInUserFailure
} from "../redux/logIn/logInActions"
import url from "./url";

import axios from "axios"

export const logInUser = (logInData) =>{
    return (dispatch) =>{
        dispatch(logInUserRequest())
        axios.post(url + '/api/Auth/Login', {
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