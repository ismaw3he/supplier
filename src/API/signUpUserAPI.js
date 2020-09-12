import {
    signUpUserRequest,
    signUpUserSuccess,
    signUpUserFailure
} from "../redux/index"
import {verifyUserSet} from "../redux/verification/verificationActions"

import url from "./url";

import axios from "axios"

export const signUpUser = (signUpData) =>{
    return (dispatch) =>{
        dispatch(signUpUserRequest())
        axios.post(url + '/api/Auth/SignUp', {
            Name: signUpData.Name,
            Surname: signUpData.Surname,
            Country: signUpData.Country,
            CompanyName: signUpData.CompanyName,
            TradeRole: Number(signUpData.TradeRole),
            PhoneNumber: signUpData.PhonePrefix + signUpData.PhoneNumber,
            Email: signUpData.Email,
            Password: signUpData.Password,
            ConfirmPassword: signUpData.ConfirmPassword
          })
          .then((response) => {
            dispatch(verifyUserSet(response.data.email))
            dispatch(signUpUserSuccess(response.data.email))
          }, (error) => {
            dispatch(signUpUserFailure("Error occured"))
          });
    }
}  