import {
    verifyUserRequest,
    verifyUserSuccess,
    verifyUserFailure
} from "../redux/verification/verificationActions"

import url from "./url";

import axios from "axios"

export const verifyUser = (verifyData) =>{
    return (dispatch) =>{
        dispatch(verifyUserRequest())
        console.log(verifyData)
        axios.post(url + '/api/Auth/Verificate', {
            Email: verifyData.Email,
            VerificationCode: verifyData.VerificationCode
          })
          .then((response) => {
            console.log(response);
            dispatch(verifyUserSuccess(verifyData.Email))
          }, (error) => {
            console.log(error.response.data.message);
            dispatch(verifyUserFailure(error.response.data.message))
          });
    }
}  