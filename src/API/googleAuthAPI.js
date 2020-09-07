import {
    logInUserSuccess,
    logInUserFailure
} from "../redux/logIn/logInActions"

import url from "./url";


export const googleResponse = (response) => {
    return (dispatch) => {
        console.log(response);
        const tokenBlob = new Blob([JSON.stringify({ tokenId: response.tokenId }, null, 2)], { type: 'application/json' });
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch(url + '/IBO-URL', options)
            .then(r => {
                r.json().then(user => {
                    console.log(user);
                    dispatch(logInUserSuccess(user.data))
                }).catch(function(error) {
                    console.log(error);
                    dispatch(logInUserFailure(error.response.data.message))
                });;
            })
    }
};