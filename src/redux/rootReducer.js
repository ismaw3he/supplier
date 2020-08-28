import {combineReducers} from "redux";
import signUpReducer from "./signUp/signUpReducer";
import logInReducer from "./logIn/logInReducer";
import verifyReducer from "./verification/verificationReducer";
// you can add extra reducers in this object
const rootReducer = combineReducers({
    signUp: signUpReducer,
    logIn: logInReducer,
    verify: verifyReducer
})

export default rootReducer;