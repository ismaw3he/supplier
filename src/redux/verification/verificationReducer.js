const {
    VERIFY_USER_REQUEST,
    VERIFY_USER_SUCCESS,
    VERIFY_USER_FAILURE,
    VERIFY_USER_SET } = require("./verificationTypes")

const initialState = {
    loading: false,
    email: "",
    verified: false,
    error: ""
}

const verifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case VERIFY_USER_SET:
            return {
                ...state,
                email: action.payload
            }
        case VERIFY_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case VERIFY_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                verified: true,
                email: action.payload,
                error: ""
            }
        case VERIFY_USER_FAILURE:
            return {
                ...state,
                loading: false,
                verified: false,
                error: action.payload
            }
        default: return state
    }
}

export default verifyReducer;