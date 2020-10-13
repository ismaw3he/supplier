import {
    EXPORT_CAPABILITY_REQUEST,
    EXPORT_CAPABILITY_SUCCESS,
    EXPORT_CAPABILITY_FAILURE
} from "./exportCapabilityTypes";

export const exportCapabilityRequest = () =>{
    return {
        type: EXPORT_CAPABILITY_REQUEST
    }
}

export const exportCapabilitySuccess = (data) =>{
    return {
        type: EXPORT_CAPABILITY_SUCCESS,
        payload: data
    }
}

export const exportCapabilityFailure = (error) =>{
    return {
        type: EXPORT_CAPABILITY_FAILURE,
        payload: error
    }
}