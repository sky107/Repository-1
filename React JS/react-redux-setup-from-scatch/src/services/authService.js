/** Siddharth Kumar Yadav
* © All rights reserved 
*/
import { request } from './APICentral';

export const postUserLogin = (data) => {

    return request({
        url: '/login', method: 'POST', data
    },
        false
    )
}

export const postUserRegister = (data) => {

    return request({
        url: '/register', method: 'POST', data
    },
        false
    )
}