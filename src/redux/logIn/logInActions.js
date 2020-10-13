import {
    LOG_IN_USER_REQUEST,
    LOG_IN_USER_SUCCESS,
    LOG_IN_USER_FAILURE,
    LOG_OUT_USER
} from "./logInTypes";


export const logInUserRequest = () =>{
    return {
        type: LOG_IN_USER_REQUEST
    }
}

export const logInUserSuccess = user =>{
    return {
        type: LOG_IN_USER_SUCCESS,
        payload: user
    }
}

export const logInUserFailure = error =>{
    return {
        type: LOG_IN_USER_FAILURE,
        payload: error
    }
}

export const logOutUser = () =>{
    return {
        type: LOG_OUT_USER
    }
}

