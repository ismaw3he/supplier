import {
    logInUserSuccess
} from "../../redux/index"
import mainUrl from "../mainUrl";

import axiosInstance from "../helpers/axiosInstance";

export default (setData, localSetter, copyData)=>{
    return (dispatch) =>{

    axiosInstance.get(mainUrl + "/User/GetAccountSetup")
    .then((res)=> {
        // localSetter(response.data)
        // dispatch(logInUserSuccess(response.data))
        console.log("********Response********");
        console.log(copyData);
        console.log(res);
        localSetter({
            ...copyData,
            country: res.data.country,
            email: res.data.email,
            name: res.data.name,
            surname: res.data.surname,
            phone: res.data.phoneNumber
        });
        
        setData({
            ...copyData,
            country: res.data.country,
            email: res.data.email,
            name: res.data.name,
            surname: res.data.surname,
            phone: res.data.phoneNumber
        });

        console.log("data", res.data)
        return res.data;
    })
    .catch(
        (err)=> {
            console.log("err", err.message)
        })
}
}