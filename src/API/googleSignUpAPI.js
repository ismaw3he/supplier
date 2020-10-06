import {
    signUpUserRequest,
    signUpUserFailure
} from "../redux/index"
import url from "./url";

import axios from "axios"

export const googleSignUpUser = (signUpData) =>{
    console.log("signUpData")
    console.log(signUpData)
    return (dispatch) =>{
        console.log("signUpData")
        console.log(signUpData)
        dispatch(signUpUserRequest())
       
        axios.post(url + '/api/Auth/GoogleSignUp', {
            Name: signUpData.Name,
            Surname: signUpData.Surname,
            Country: signUpData.Country,
            CompanyName: signUpData.CompanyName,
            TradeRole: Number(signUpData.TradeRole),
            PhoneNumber: signUpData.PhoneNumber,
            TokenId: signUpData.GoogleTokenId
          })
          .then((response) => {
            console.log("response")
            console.log(response)
            // dispatch(logInUserSuccess(response.data))
          }, (error) => {
            console.log("error")
            console.log(error.response)
            dispatch(signUpUserFailure(error.response.data.errorMessage))
          });
    }
}  