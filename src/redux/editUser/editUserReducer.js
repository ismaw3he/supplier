const { EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAILURE } = require("./editUserTypes")
  
const initialState = {
    loading: false,
    user: {},
    error: ""
}

const editUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: ""
            }
        case EDIT_USER_FAILURE:
            return {
                ...state,
                loading: false,
                userData: {},
                error: action.payload
           }
       default: return state

    }
}

export default editUserReducer;