import {
    COMPANY_INFO_REQUEST,
    COMPANY_INFO_SUCCESS,
    COMPANY_INFO_FAILURE
} from "./companyInfoTypes";

export const companyInfoRequest = () =>{
    return {
        type: COMPANY_INFO_REQUEST
    }
}

export const companyInfoSuccess = (data) =>{
    return {
        type: COMPANY_INFO_SUCCESS,
        payload: data
    }
}

export const companyInfoFailure = (error) =>{
    return {
        type: COMPANY_INFO_FAILURE,
        payload: error
    }
}