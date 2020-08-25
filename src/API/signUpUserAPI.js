import {
    signUpUserRequest,
    signUpUserSuccess,
    signUpUserFailure
} from "../redux/signUp/signUpActions"

import axios from "axios"

export const signUpUser = (mail) =>{
    return (dispatch) =>{
        dispatch(signUpUserRequest())
        // axios.get("")
        // .then(response=>{
        //     const users = response.data;
            dispatch(signUpUserSuccess(mail))
        // })
        // .catch(error=>{
            // const errorMsg = error.message;
            // dispatch(signUpUserFailure("errorMsg"))
        // })
    }
}  