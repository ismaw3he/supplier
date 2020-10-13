import {combineReducers} from "redux";
import signUpReducer from "./signUp/signUpReducer";
import logInReducer from "./logIn/logInReducer";
import verifyReducer from "./verification/verificationReducer";
import editUserReducer from "./editUser/editUserReducer";
import forgotPasswordReducer from "./forgotPassword/forgotPasswordReducer";

import generalInfoReducer from "./detailed/generalInfo/generalInfoReducer";
import companyInfoReducer from "./detailed/companyInfo/companyInfoReducer";
import sourcingInfoReducer from "./detailed/sourcingInfo/sourcingInfoReducer";
import accountSetupReducer from "./detailed/accountSetup/accountSetupReducer";
import companyDetailsReducer from "./detailed/companyDetails/companyDetailsReducer";
import businessVerificationReducer from "./detailed/businessVerification/businessVerificationReducer";
import companyIntroductionReducer from "./detailed/companyIntroduction/companyIntroductionReducer";
import exportCapabilityReducer from "./detailed/exportCapability/exportCapabilityReducer";
import manufacturingCapabilityReducer from "./detailed/manufacturingCapability/manufacturingCapabilityReducer";

const rootReducer = combineReducers({
    signUp: signUpReducer,
    logIn: logInReducer,
    verify: verifyReducer,
    edit: editUserReducer,
    forgotPSWD: forgotPasswordReducer,
    generalInfo: generalInfoReducer,
    companyInfo: companyInfoReducer,
    sourcingInfo: sourcingInfoReducer,
    accountSetup: accountSetupReducer,
    companyDetails: companyDetailsReducer,
    businessVerification: businessVerificationReducer,
    companyIntroduction: companyIntroductionReducer,
    exportCapability : exportCapabilityReducer,
    manufacturingCapability: manufacturingCapabilityReducer
})

export default rootReducer;