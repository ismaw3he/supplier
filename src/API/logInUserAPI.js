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
        console.log(logInData)
        axios.post(url + '/api/Auth/Login', {
            Email: logInData.Email,
            Password: logInData.Password
          })
          .then((response) => {
            console.log(response);
            dispatch(logInUserSuccess(response))
          }, (error) => {
            console.log(error);
            dispatch(logInUserFailure("errorMsg"))
          });
    }
}  