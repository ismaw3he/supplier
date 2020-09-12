import {combineReducers} from "redux";
import signUpReducer from "./signUp/signUpReducer";
import logInReducer from "./logIn/logInReducer";
import verifyReducer from "./verification/verificationReducer";
import editUserReducer from "./editUser/editUserReducer";
import forgotPasswordReducer from "./forgotPassword/forgotPasswordReducer";

const rootReducer = combineReducers({
    signUp: signUpReducer,
    logIn: logInReducer,
    verify: verifyReducer,
    edit: editUserReducer,
    forgotPSWD: forgotPasswordReducer
})

export default rootReducer;