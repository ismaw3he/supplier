import {combineReducers} from "redux";
import signUpReducer from "./signUp/signUpReducer";
import logInReducer from "./logIn/logInReducer";
import verifyReducer from "./verification/verificationReducer";
import editUserReducer from "./editUser/editUserReducer";

const rootReducer = combineReducers({
    signUp: signUpReducer,
    logIn: logInReducer,
    verify: verifyReducer,
    edit: editUserReducer
})

export default rootReducer;