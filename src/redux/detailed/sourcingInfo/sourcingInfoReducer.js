const { SOURCING_INFO_REQUEST, SOURCING_INFO_SUCCESS, SOURCING_INFO_FAILURE } = require("./sourcingInfoTypes")
  
const initialState = {
    loading: false,
    data: {},
    error: ""
}

const sourcingInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SOURCING_INFO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SOURCING_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case SOURCING_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
           }
       default: return state

    }
}

export default sourcingInfoReducer;