/** Siddharth Kumar Yadav
* © All rights reserved 
*/

import axios from 'axios';
const BASE_URL = 'https://powerstack-backend.herokuapp.com'

export const request = async (options, isHeader = true, isMultiPartFormData = false) => {

    let authHeader = null;

    if (isHeader) {
        let token = localStorage.getItem('tt');
        console.log(token)
        authHeader = token != ' ' ? `Bearer ${token}` : '';
    }

    const client = axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: authHeader,
            accept: 'application/json',
            'Content-Type': isMultiPartFormData ? 'multipart/form-data' : 'application/json',
        }
    })

    return client(options);
} 