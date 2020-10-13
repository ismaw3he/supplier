const { ACCOUNT_SETUP_REQUEST, ACCOUNT_SETUP_SUCCESS, ACCOUNT_SETUP_FAILURE } = require("./accountSetupTypes")
  
const initialState = {
    loading: false,
    data: {},
    error: ""
}

const accountSetupReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACCOUNT_SETUP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ACCOUNT_SETUP_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case ACCOUNT_SETUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
           }
       default: return state

    }
}

export default accountSetupReducer;