import {
    COMPANY_INTRODUCTION_REQUEST,
    COMPANY_INTRODUCTION_SUCCESS,
    COMPANY_INTRODUCTION_FAILURE
} from "./companyIntroductionTypes";

export const companyIntroductionRequest = () =>{
    return {
        type: COMPANY_INTRODUCTION_REQUEST
    }
}

export const companyIntroductionSuccess = (data) =>{
    return {
        type: COMPANY_INTRODUCTION_SUCCESS,
        payload: data
    }
}

export const companyIntroductionFailure = (error) =>{
    return {
        type: COMPANY_INTRODUCTION_FAILURE,
        payload: error
    }
}