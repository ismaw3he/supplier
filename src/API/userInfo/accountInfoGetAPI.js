import {
    logInUserRequest,
    logInUserSuccess,
    logInUserFailure
} from "../../redux/index"
import mainUrl from "../mainUrl";
import url from "../url";
import axios from "axios"

import localSetter from "../../generals/localSetter";
import localGetter from "../../generals/localGetter";
import localUpdateUser from "../../generals/localUpdateUser"
import refreshTokenAPI from "../refreshTokenAPI";

const config = {
    headers: { Authorization: `Bearer ${localGetter().accessToken}` }
};

export const accountInfoGetAPI = () =>{
    return (dispatch) =>{
        axios.get(mainUrl + '/User/GetAccountSetup', config)
          .then((response) => {
              console.log("test");
              console.log(response.data);
              
              localUpdateUser(response.data)
               dispatch(logInUserSuccess(response.data))
          }, (error) => {
            if(error.response.data.message === "Unauthorized"){
                console.log("token expired");
            }
            else{
                if(error.response){
                    console.log(error.response.data)
                  //   dispatch(logInUserFailure(error.response.data))
                  }
                  else{
                  //   dispatch(logInUserFailure("No Connection"))
                  }
            }


          });
    }
}