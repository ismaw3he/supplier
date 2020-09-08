import {
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE
} from "./editUserTypes";


export const editUserRequest = () =>{
    return {
        type: EDIT_USER_REQUEST
    }
}

export const editUserSuccess = user =>{
    return {
        type: EDIT_USER_SUCCESS,
        payload: user
    }
}

export const editUserFailure = error =>{
    return {
        type: EDIT_USER_FAILURE,
        payload: error
    }
}