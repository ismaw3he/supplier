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
        // axios.get("")
        // .then(response=>{
        //     const users = response.data;
            // dispatch(logInUserSuccess(mail))
        // })
        // .catch(error=>{
            // const errorMsg = error.message;
            // dispatch(logInUserFailure("errorMsg"))
        // })
        console.log(logInData)
        axios.post(url + '/', {
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