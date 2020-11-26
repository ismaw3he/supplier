import axios, { AxiosRequestConfig } from 'axios';
import { Promise } from 'es6-promise';
import url from "../url";

export class TokenStorage {

   static  LOCAL_STORAGE_TOKEN = 'accessToken';
   static  LOCAL_STORAGE_REFRESH_TOKEN = 'refreshToken';

   static isAuthenticated() {
    return this.getToken() !== null;
  }

   static getAuthentication() {
    return {
      headers: { 'Authorization': 'Bearer ' + this.getToken() }
    };
  }

   static getNewToken() {
       console.log("GETTING NEW TOKEN");
    return new Promise((resolve, reject) => {
      axios
        .post( url + "/api/Auth/CreateAccessToken", { RefreshToken: this.getRefreshToken() })
        .then(response => {
          console.log(response.data.refreshToken);
          this.storeToken(response.data.token);
          this.storeRefreshToken(response.data.refreshToken);
 
          resolve(response.data.token);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

   static storeToken(token) {
    localStorage.setItem(TokenStorage.LOCAL_STORAGE_TOKEN, token);
  }

   static storeRefreshToken(refreshToken) {
       console.log("storing refresh token", refreshToken);
    localStorage.setItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN, refreshToken);
  }

   static clear() {
    localStorage.removeItem(TokenStorage.LOCAL_STORAGE_TOKEN);
    localStorage.removeItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN);
  }

   static getRefreshToken() {
    return localStorage.getItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN);
  }

   static getToken() {
    return localStorage.getItem(TokenStorage.LOCAL_STORAGE_TOKEN);
  }
}