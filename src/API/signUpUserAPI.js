import {
    signUpUserRequest,
    signUpUserSuccess,
    signUpUserFailure
} from "../redux/signUp/signUpActions"

import url from "./url";

import axios from "axios"

export const signUpUser = (signUpData) =>{
    return (dispatch) =>{
        dispatch(signUpUserRequest())
        console.log(signUpData)
        axios.post(url + '/api/Auth/SignIn', {
            Name: signUpData.Name,
            Surname: signUpData.Surname,
            Country: signUpData.Country,
            CompanyName: signUpData.CompanyName,
            TradeRole: signUpData.TradeRole,
            PhoneNumber: signUpData.PhoneNumber,
            Email: signUpData.Email,
            Password: signUpData.Password,
            ConfirmPassword: signUpData.ConfirmPassword
          })
          .then((response) => {
            console.log(response);
            dispatch(signUpUserSuccess(response))
          }, (error) => {
            console.log(error);
            dispatch(signUpUserFailure("errorMsg"))
          });
    }
}  