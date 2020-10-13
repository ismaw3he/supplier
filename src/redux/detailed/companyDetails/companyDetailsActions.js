import {
    COMPANY_DETAILS_REQUEST,
    COMPANY_DETAILS_SUCCESS,
    COMPANY_DETAILS_FAILURE
} from "./companyDetailsTypes";

export const companyDetailsRequest = () =>{
    return {
        type: COMPANY_DETAILS_REQUEST
    }
}

export const companyDetailsSuccess = (data) =>{
    return {
        type: COMPANY_DETAILS_SUCCESS,
        payload: data
    }
}

export const companyDetailsFailure = (error) =>{
    return {
        type: COMPANY_DETAILS_FAILURE,
        payload: error
    }
}