import {
    logInUserRequest,
    logInUserSuccess,
    logInUserFailure
} from "../redux/index"
import url from "./url";

import axios from "axios"

export const googleSignInUser = (response) =>{
    return (dispatch) =>{
        dispatch(logInUserRequest())
        axios.post(url + '/api/Auth/GoogleSignIn', {
            TokenId: response.tokenId
          })
          .then((response) => {
            dispatch(logInUserSuccess(response.data))
          }, (error) => {
            dispatch(logInUserFailure(error.response.data.errorMessage))
          });
    }
}  