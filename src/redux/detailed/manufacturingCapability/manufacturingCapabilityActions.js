import {
    MANUFACTURING_CAPABILITY_REQUEST,
    MANUFACTURING_CAPABILITY_SUCCESS,
    MANUFACTURING_CAPABILITY_FAILURE
} from "./manufacturingCapabilityTypes";

export const manufacturingCapabilityRequest = () =>{
    return {
        type: MANUFACTURING_CAPABILITY_REQUEST
    }
}

export const manufacturingCapabilitySuccess = (data) =>{
    return {
        type: MANUFACTURING_CAPABILITY_SUCCESS,
        payload: data
    }
}

export const manufacturingCapabilityFailure = (error) =>{
    return {
        type: MANUFACTURING_CAPABILITY_FAILURE,
        payload: error
    }
}