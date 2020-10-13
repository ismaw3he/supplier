const { 
    BUSINESS_VERIFICATION_REQUEST, 
    BUSINESS_VERIFICATION_SUCCESS, 
    BUSINESS_VERIFICATION_FAILURE } = require("./businessVerificationTypes")
  
const initialState = {
    loading: false,
    data: {},
    error: ""
}

const businessVerificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUSINESS_VERIFICATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case BUSINESS_VERIFICATION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case BUSINESS_VERIFICATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
           }
       default: return state

    }
}

export default businessVerificationReducer;