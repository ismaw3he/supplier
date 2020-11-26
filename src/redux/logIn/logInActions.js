import {
    LOG_IN_USER_REQUEST,
    LOG_IN_USER_SUCCESS,
    LOG_IN_USER_FAILURE,
    LOG_OUT_USER
} from "./logInTypes";

import localClear from "../../generals/localClear";

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
    console.log("Logging Out");
    localClear();
    return {
        type: LOG_OUT_USER
    }
}

