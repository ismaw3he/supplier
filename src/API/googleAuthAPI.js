import {
    logInUserSuccess,
    logInUserFailure
} from "../redux/index"

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
        fetch(url + '/api/Auth/GoogleAuth', options)
            .then(r => {
                r.json().then(user => {
                    console.log(user);
                    dispatch(logInUserSuccess(user.data))
                }).catch(function (error) {
                    console.log(error);
                    if (error.response.data.message) {
                        dispatch(logInUserFailure(error.response.data.message))
                    }
                });;
            })
    }
};