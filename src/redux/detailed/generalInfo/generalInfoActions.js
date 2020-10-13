import {
    GENERAL_INFO_REQUEST,
    GENERAL_INFO_SUCCESS,
    GENERAL_INFO_FAILURE
} from "./generalInfoTypes";

export const generalInfoRequest = () =>{
    return {
        type: GENERAL_INFO_REQUEST
    }
}

export const generalInfoSuccess = (data) =>{
    return {
        type: GENERAL_INFO_SUCCESS,
        payload: data
    }
}

export const generalInfoFailure = (error) =>{
    return {
        type: GENERAL_INFO_FAILURE,
        payload: error
    }
}