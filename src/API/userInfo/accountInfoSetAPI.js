import {
    logInUserSuccess
} from "../../redux/index"
import mainUrl from "../mainUrl";

import axiosInstance from "../helpers/axiosInstance";

export default ( copyData)=>{
    return (dispatch) =>{
    
    axiosInstance.put(mainUrl + "/User/UpdateAccountSetup", {
        Name: copyData.name,
        Surname: copyData.surname,
        Gender: 1,
        Country: copyData.country,
        Email: copyData.email,
        AlternativeEmail: "",
        PhoneNumber: copyData.phone,
        ProfilePicture: "some_Url_Here"
    })
    .then((res)=> {
        // localSetter(response.data)
        // dispatch(logInUserSuccess(response.data))
        console.log("********Set Response********");
        console.log(copyData);

        // localSetter({
        //     ...copyData,
        //     country: res.data.country,
        //     email: res.data.email,
        //     name: res.data.name,
        //     surname: res.data.surname,
        //     phone: res.data.phoneNumber
        // });
        
        // setData({
        //     ...copyData,
        //     country: res.data.country,
        //     email: res.data.email,
        //     name: res.data.name,
        //     surname: res.data.surname,
        //     phone: res.data.phoneNumber
        // });
        
        console.log("set data", res.data)
        return res.data;
    })
    .catch(
        (err)=> {
            console.log("err", err.message)
        })
}
}