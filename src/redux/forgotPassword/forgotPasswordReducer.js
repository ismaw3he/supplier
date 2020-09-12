const { FORGOT_PSWD_REQUEST, FORGOT_PSWD_SUCCESS, FORGOT_PSWD_FAILURE } = require("./forgotPasswordTypes")
  
const initialState = {
    loading: false,
    response: {},
    error: "",
    success: false
}

const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORGOT_PSWD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FORGOT_PSWD_SUCCESS:
            return {
                ...state,
                loading: false,
                response: action.payload.response.email,
                error: "",
                success: action.payload.success
            }
        case FORGOT_PSWD_FAILURE:
            return {
                ...state,
                loading: false,
                response: {},
                success:false,
                error: action.payload.errorMessage
           }
       default: return state

    }
}

export default logInReducer;