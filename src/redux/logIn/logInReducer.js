const { LOG_IN_USER_REQUEST, LOG_IN_USER_SUCCESS, LOG_IN_USER_FAILURE } = require("./logInTypes")
  
const initialState = {
    loading: false,
    user: {},
    error: "",
    loggedIn: false
}

const logInReducer = (state = initialState, action) => {
    switch (action.type) {
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
                loggedIn: true
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