import {combineReducers} from "redux";
import signUpReducer from "./signUp/signUpReducer";
import logInReducer from "./logIn/logInReducer";
// you can add extra reducers in this object
const rootReducer = combineReducers({
    signUp: signUpReducer,
    logIn: logInReducer
})

export default rootReducer;