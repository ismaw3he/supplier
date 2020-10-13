const {
    COMPANY_INTRODUCTION_REQUEST,
    COMPANY_INTRODUCTION_SUCCESS,
    COMPANY_INTRODUCTION_FAILURE
} = require("./companyIntroductionTypes")

const initialState = {
    loading: false,
    data: {},
    error: ""
}

const companyIntroductionReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPANY_INTRODUCTION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case COMPANY_INTRODUCTION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case COMPANY_INTRODUCTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state

    }
}

export default companyIntroductionReducer;