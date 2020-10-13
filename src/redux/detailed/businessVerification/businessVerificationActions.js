import {
    BUSINESS_VERIFICATION_REQUEST,
    BUSINESS_VERIFICATION_SUCCESS,
    BUSINESS_VERIFICATION_FAILURE
} from "./businessVerificationTypes";

export const businessVerificationRequest = () =>{
    return {
        type: BUSINESS_VERIFICATION_REQUEST
    }
}

export const businessVerificationSuccess = (data) =>{
    return {
        type: BUSINESS_VERIFICATION_SUCCESS,
        payload: data
    }
}

export const businessVerificationFailure = (error) =>{
    return {
        type: BUSINESS_VERIFICATION_FAILURE,
        payload: error
    }
}