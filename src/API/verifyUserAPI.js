import {
    verifyUserRequest,
    verifyUserSuccess,
    verifyUserFailure
} from "../redux/index"

import url from "./url";

import axios from "axios"

export const verifyUser = (verifyData) =>{
    return (dispatch) =>{
        dispatch(verifyUserRequest())
        axios.post(url + '/api/Auth/Verificate', {
            Email: verifyData.Email,
            VerificationCode: verifyData.VerificationCode
          })
          .then((response) => {
            dispatch(verifyUserSuccess(verifyData.Email))
          }, (error) => {
            dispatch(verifyUserFailure(error.response.data.message))
          });
    }
}  