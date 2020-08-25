const { SIGN_IN_USER_REQUEST, SIGN_IN_USER_SUCCESS, SIGN_IN_USER_FAILURE } = require("./signInTypes")
  
const initialState = {
    loading: false,
    mail: "",
    error: ""
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SIGN_IN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                mail: action.payload
            }
        case SIGN_IN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                mail: "",
                error: action.payload
           }
       default: return state

    }
}

export default signInReducer;