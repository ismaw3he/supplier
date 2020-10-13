const { 
    MANUFACTURING_CAPABILITY_REQUEST, 
    MANUFACTURING_CAPABILITY_SUCCESS, 
    MANUFACTURING_CAPABILITY_FAILURE } = require("./manufacturingCapabilityTypes")
  
const initialState = {
    loading: false,
    data: {},
    error: ""
}

const manufacturingCapabilityReducer = (state = initialState, action) => {
    switch (action.type) {
        case MANUFACTURING_CAPABILITY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case MANUFACTURING_CAPABILITY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case MANUFACTURING_CAPABILITY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
           }
       default: return state

    }
}

export default manufacturingCapabilityReducer;