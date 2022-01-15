/** Siddharth Kumar Yadav
* © All rights reserved 
*/

import {getSavedRecords,postSaveRecord,deleteRecord} from '../../services';
import { RecordTypes } from '../actionTypes';
export const getSavedRecordsAction=(data,callback)=>dispatch=>{
    getSavedRecords(data || {page:1})
    .then(({data})  =>{  
        dispatch({type:RecordTypes.FETCH_SAVED_CURRENCY_DATA,payload:data});
        if(callback)
        callback(true)
    })
    .catch(err=>{
        console.log("erro in get",err)
        dispatch({type:"",payload:""})
    })

}

export const postSaveRecordAction=(data,callback)=>dispatch=>{
  
    postSaveRecord(data)
    .then(response=>{
       
        if(callback)
        callback(true);
        dispatch({type:"",payload:""});
    })
    .catch(err=>{
        console.log("ERR",err);
        dispatch({type:"",payload:""})
    })

}



export const deleteRecordAction=(data,callback)=>dispatch=>{
  
    deleteRecord(data)  
    .then(response=>{
        console.log("DLERTED")
        console.log(response)
        
        dispatch(getSavedRecordsAction({page:1}));

        if(callback){
            setTimeout(()=>{
                callback(true)
            },1000)
        }
    })
    .catch(err=>{
        console.log("ERR",err);
        dispatch({type:"",payload:""})
    })

}
