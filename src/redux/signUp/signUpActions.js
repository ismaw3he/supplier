import {
    SIGN_UP_USER_REQUEST,
    SIGN_UP_USER_SUCCESS,
    SIGN_UP_USER_FAILURE
} from "./signUpTypes";


export const signUpUserRequest = () =>{
    return {
        type: SIGN_UP_USER_REQUEST
    }
}

export const signUpUserSuccess = user =>{
    return {
        type: SIGN_UP_USER_SUCCESS,
        payload: user
    }
}

export const signUpUserFailure = error =>{
    return {
        type: SIGN_UP_USER_FAILURE,
        payload: error
    }
}

