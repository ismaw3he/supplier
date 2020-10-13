import {
  signUpUserRequest,
  signUpUserFailure
} from "../redux/index"
import url from "./url";
import { logInUserSuccess } from "../redux/index"
import axios from "axios"
import localSetter from "../generals/localSetter";

export const googleSignUpUser = (signUpData) => {
  console.log("signUpData")
  console.log(signUpData)
  return (dispatch) => {
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
        localSetter(response.data)
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