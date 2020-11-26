import axios from "axios";
import mainUrl from "../mainUrl";
import {TokenStorage} from "./TokenStorage";

let headers = {};

if (localStorage.getItem("accessToken")) {
  headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`
}

const axiosInstance = axios.create({
  headers
});

axiosInstance.interceptors.response.use((response) => new Promise((resolve, reject) => {
  resolve(response)
}), (error) => {
  if (!error.response) {
    return new Promise((resolve, reject) => {
      reject(error)
    })
  }

  if (error.config.url == mainUrl + '/api/Auth/CreateAccessToken' || error.response.message == 'Account is disabled.') {
      
    TokenStorage.clear();
    //  push to root

    return new Promise((resolve, reject) => {
      reject(error);
    });
  }

  if(error.response.code===403){
    localStorage.removeItem("accessToken")
    // redirect to login here
  }
  // else{
  //   return new Promise((resolve, reject) => {
  //     reject(error)
  //   })
  // }

  return TokenStorage.getNewToken()
  .then((token) => {

    // New request with new token
    const config = error.config;
    config.headers['Authorization'] = `Bearer ${token}`;

    return new Promise((resolve, reject) => {
      axios.request(config).then(response => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    });

  })
  .catch((error) => {
    Promise.reject(error);
  });
}
);

export default axiosInstance;