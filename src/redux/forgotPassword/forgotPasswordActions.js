import {
    FORGOT_PSWD_REQUEST,
    FORGOT_PSWD_SUCCESS,
    FORGOT_PSWD_FAILURE
} from "./forgotPasswordTypes";


export const forgotPasswordRequest = () =>{
    return {
        type: FORGOT_PSWD_REQUEST
    }
}

export const forgotPasswordSuccess = user =>{
    return {
        type: FORGOT_PSWD_SUCCESS,
        payload: user
    }
}

export const forgotPasswordFailure = error =>{
    return {
        type: FORGOT_PSWD_FAILURE,
        payload: error
    }
}