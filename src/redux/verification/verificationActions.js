import {
    VERIFY_USER_REQUEST,
    VERIFY_USER_SUCCESS,
    VERIFY_USER_FAILURE,
    VERIFY_USER_SET
} from "./verificationTypes";


export const verifyUserSet = email =>{
    return {
        type: VERIFY_USER_SET,
        payload: email
    }
}

export const verifyUserRequest = () =>{
    return {
        type: VERIFY_USER_REQUEST
    }
}

export const verifyUserSuccess = verified =>{
    return {
        type: VERIFY_USER_SUCCESS,
        payload: verified
    }
}

export const verifyUserFailure = error =>{
    return {
        type: VERIFY_USER_FAILURE,
        payload: error
    }
}

