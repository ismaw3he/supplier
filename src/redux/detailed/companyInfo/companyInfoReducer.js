const { COMPANY_INFO_REQUEST, COMPANY_INFO_SUCCESS, COMPANY_INFO_FAILURE } = require("./companyInfoTypes")
  
const initialState = {
    loading: false,
    data: {},
    error: ""
}

const companyInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPANY_INFO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case COMPANY_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case COMPANY_INFO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
           }
       default: return state

    }
}

export default companyInfoReducer;