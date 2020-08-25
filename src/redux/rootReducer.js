import {combineReducers} from "redux";
import signUpReducer from "./signUp/signUpReducer";
import signInReducer from "./signIn/signInReducer";
// you can add extra reducers in this object
const rootReducer = combineReducers({
    signUp: signUpReducer,
    signIn: signInReducer
})

export default rootReducer;