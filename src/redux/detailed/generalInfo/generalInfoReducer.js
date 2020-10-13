const { GENERAL_INFO_REQUEST, GENERAL_INFO_SUCCESS, GENERAL_INFO_FAILURE } = require("./generalInfoTypes")
  
const initialState = {
    loading: false,
    data: {},
    error: ""
}

const generalInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENERAL_INFO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GENERAL_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case GENERAL_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
           }
       default: return state

    }
}

export default generalInfoReducer;