const { 
    EXPORT_CAPABILITY_REQUEST, 
    EXPORT_CAPABILITY_SUCCESS, 
    EXPORT_CAPABILITY_FAILURE } = require("./exportCapabilityTypes")
  
const initialState = {
    loading: false,
    data: {},
    error: ""
}

const exportCapabilityReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXPORT_CAPABILITY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case EXPORT_CAPABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case EXPORT_CAPABILITY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
           }
       default: return state

    }
}

export default exportCapabilityReducer;