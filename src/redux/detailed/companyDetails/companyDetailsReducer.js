const { COMPANY_DETAILS_REQUEST, COMPANY_DETAILS_SUCCESS, COMPANY_DETAILS_FAILURE } = require("./companyDetailsTypes")
  
const initialState = {
    loading: false,
    data: {},
    error: ""
}

const companyDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPANY_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case COMPANY_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case COMPANY_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
           }
       default: return state

    }
}

export default companyDetailsReducer;