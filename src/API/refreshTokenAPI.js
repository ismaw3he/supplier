import url from "./url";
import axios from "axios"
// import localSetter from "../../generals/localSetter";

export const refreshTokenAPI = (refreshToken) => {
    axios.post(url + "/api/Auth/CreateAccessToken", {
        RefreshToken: refreshToken
    }).then((response) => {
        console.log(response.data);
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("expiration",response.data.expiration);
        return response.data.token
    }, (error) => {
        console.log(error);
    })
}
