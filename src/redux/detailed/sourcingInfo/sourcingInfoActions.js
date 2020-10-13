import {
    SOURCING_INFO_REQUEST,
    SOURCING_INFO_SUCCESS,
    SOURCING_INFO_FAILURE
} from "./sourcingInfoTypes";

export const sourcingInfoRequest = () =>{
    return {
        type: SOURCING_INFO_REQUEST
    }
}

export const sourcingInfoSuccess = (data) =>{
    return {
        type: SOURCING_INFO_SUCCESS,
        payload: data
    }
}

export const sourcingInfoFailure = (error) =>{
    return {
        type: SOURCING_INFO_FAILURE,
        payload: error
    }
}