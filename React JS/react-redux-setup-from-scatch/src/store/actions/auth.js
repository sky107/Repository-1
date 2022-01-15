/** Siddharth Kumar Yadav
* © All rights reserved 
*/
import {postUserLogin,postUserRegister} from '../../services';
import { AuthTypes} from '../actionTypes/auth';

export const postUserLoginAction=(data,callback)=>dispatch=>{

    postUserLogin(data)
    .then(response=>{
        
        localStorage.setItem('tt',response.data.token);
        if(response.data.token)
        {  
          
            
            dispatch({type:AuthTypes.SAVE_USER_PROFILE,payload:response.data});
           if(callback)
           callback(true)
        }
       
    })
    .catch(err=>{
        console.log("ERROR",err);
        // dispatch({type:"",payload:""})
    })

}

export const postUserRegisterAction=(data,callback)=>dispatch=>{

    postUserRegister(data)
    .then(response=>{
        console.log(response);
        dispatch({type:"",payload:""});
    })
    .catch(err=>{
        dispatch({type:"",payload:""})
    })

}