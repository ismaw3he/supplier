const { LOG_IN_USER_REQUEST, LOG_IN_USER_SUCCESS, LOG_IN_USER_FAILURE, LOG_OUT_USER } = require("./logInTypes")
  
const initialState = {
    loading: false,
    user: {},
    error: "",
    isAuthenticated: false
}

const logInReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_OUT_USER:
            return initialState
        case LOG_IN_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOG_IN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: "",
                isAuthenticated: true
            }
        case LOG_IN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                userData: {},
                error: action.payload
           }
       default: return state

    }
}

export default logInReducer;