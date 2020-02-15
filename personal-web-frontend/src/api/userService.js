import { URL_SERVICIOS } from './config';

export function signUpApi(data) {

    const END_POINT = URL_SERVICIOS + '/sign-up';
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    };

    return fetch(END_POINT, params).then(response => {
        return response.json();
    }).then(finalResponse => {
        return finalResponse
    }).catch(err => {
        return err;
    })
}