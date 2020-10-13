import {
    logInUserRequest,
    logInUserSuccess,
    logInUserFailure
} from "../redux/index"
import url from "./url";
import localSetter from "../generals/localSetter";
import axios from "axios"

export const googleSignInUser = (response) =>{
    return (dispatch) =>{
        dispatch(logInUserRequest())
        axios.post(url + '/api/Auth/GoogleSignIn', {
            TokenId: response.tokenId
          })
          .then((response) => {
            localSetter(response.data)
            dispatch(logInUserSuccess(response.data))
          }, (error) => {
            
            if(error.response){
              console.log(error.response);
            dispatch(logInUserFailure(error.response.data))
            }
            else{
              dispatch(logInUserFailure("No Connection"))
            }
          });
    }
}  