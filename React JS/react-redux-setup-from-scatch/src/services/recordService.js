/** Siddharth Kumar Yadav
* © All rights reserved 
*/
import { request } from './APICentral';


export const getRecords = (data) => {
    return request({
        url: '/data', method: 'GET'
    })
}
export const getSavedRecords = (data) => {

    return request({
        url: `/user/saved-records?page=${data?.page}`, method: 'GET'
    },
        true
    )
}

export const postSaveRecord = (data) => {

    return request({
        url: '/user/save-record', method: 'POST', data
    },
        true)
}

export const deleteRecord = (data) => {
    return request({
        url: '/user/delete-record', method: 'DELETE', data
    },
        true
    )
}