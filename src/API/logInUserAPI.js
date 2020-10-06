import {
    logInUserRequest,
    logInUserSuccess,
    logInUserFailure
} from "../redux/index"
import url from "./url";

import axios from "axios"

export const logInUser = (logInData) =>{
    return (dispatch) =>{
        dispatch(logInUserRequest())
        axios.post(url + '/api/Auth/SignIn', {
            Email: logInData.Email,
            Password: logInData.Password
          })
          .then((response) => {
            dispatch(logInUserSuccess(response.data))
          }, (error) => {
            console.log(error)
            dispatch(logInUserFailure(error.response.data.errorMessage))
          });
    }
}  