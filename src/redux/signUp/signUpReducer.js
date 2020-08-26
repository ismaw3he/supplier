const { SIGN_UP_USER_REQUEST, SIGN_UP_USER_SUCCESS, SIGN_UP_USER_FAILURE } = require("./signUpTypes")
  
const initialState = {
    loading: false,
    mail: {},
    error: ""
}

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SIGN_UP_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                userData: action.payload
            }
        case SIGN_UP_USER_FAILURE:
            return {
                ...state,
                loading: false,
                userData: "",
                error: action.payload
           }
       default: return state

    }
}

export default signUpReducer;