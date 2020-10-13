import {
    ACCOUNT_SETUP_REQUEST,
    ACCOUNT_SETUP_SUCCESS,
    ACCOUNT_SETUP_FAILURE
} from "./accountSetupTypes";

export const accountSetupRequest = () =>{
    return {
        type: ACCOUNT_SETUP_REQUEST
    }
}

export const accountSetupSuccess = (data) =>{
    return {
        type: ACCOUNT_SETUP_SUCCESS,
        payload: data
    }
}

export const accountSetupFailure = (error) =>{
    return {
        type: ACCOUNT_SETUP_FAILURE,
        payload: error
    }
}