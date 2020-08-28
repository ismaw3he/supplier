const { SIGN_UP_USER_REQUEST, SIGN_UP_USER_SUCCESS, SIGN_UP_USER_FAILURE } = require("./signUpTypes")
  
const initialState = {
    loading: false,
    email: "",
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
                email: action.payload,
                error: ""
            }
        case SIGN_UP_USER_FAILURE:
            return {
                ...state,
                loading: false,
                email: "",
                error: action.payload
           }
       default: return state

    }
}

export default signUpReducer;