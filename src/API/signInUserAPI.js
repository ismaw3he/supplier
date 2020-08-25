import {
    signInUserRequest,
    signInUserSuccess,
    signInUserFailure
} from "../redux/signIn/signInActions"

import axios from "axios"

export const signInUser = (mail) =>{
    return (dispatch) =>{
        dispatch(signInUserRequest())
        // axios.get("")
        // .then(response=>{
        //     const users = response.data;
            dispatch(signInUserSuccess(mail))
        // })
        // .catch(error=>{
            // const errorMsg = error.message;
            // dispatch(signInUserFailure("errorMsg"))
        // })
    }
}  