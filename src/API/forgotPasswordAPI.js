import {
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure
} from "../redux/index"

import url from "./url";

import axios from "axios"

export const forgotPassword = (email) =>{
    return (dispatch) =>{
        dispatch(forgotPasswordRequest())
        axios.post(url + '/api/Auth/ForgotPassword', {
            Email: email
          })
          .then((response) => {
            dispatch(forgotPasswordSuccess(response.data))
          }, (error) => {
            dispatch(forgotPasswordFailure(error.response.data.errorMessage))
          });
    }
}  