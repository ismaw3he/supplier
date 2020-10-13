import {
  signUpUserRequest,
  signUpUserFailure,
  signUpUserSuccess
} from "../redux/index"
import url from "./url";
import { logInUserSuccess } from "../redux/index"
import axios from "axios"
import localSetter from "../generals/localSetter";

export const googleSignUpUser = (signUpData) => {
  return (dispatch) => {
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
        localSetter(response.data)
        dispatch(signUpUserSuccess(response.data.email))
        dispatch(logInUserSuccess(response.data))
      }, (error) => {
        if (error.response) {
          console.log(error.response)
          dispatch(signUpUserFailure(error.response.data))
        }
        else {
          dispatch(signUpUserFailure("No Connection"))
        }
      });
  }
}  