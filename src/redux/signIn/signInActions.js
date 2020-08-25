import {
    SIGN_IN_USER_REQUEST,
    SIGN_IN_USER_SUCCESS,
    SIGN_IN_USER_FAILURE
} from "./signInTypes";


export const signInUserRequest = () =>{
    return {
        type: SIGN_IN_USER_REQUEST
    }
}

export const signInUserSuccess = user =>{
    return {
        type: SIGN_IN_USER_SUCCESS,
        payload: user
    }
}

export const signInUserFailure = error =>{
    return {
        type: SIGN_IN_USER_FAILURE,
        payload: error
    }
}

