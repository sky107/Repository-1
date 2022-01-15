import { combineReducers } from 'redux';
import { AuthTypes } from '../actionTypes';

const userInfo = (state = {email:'siddharth'}, action) => {

    switch (action.type) {
        case AuthTypes.SAVE_USER_PROFILE: {
            
            localStorage.setItem('tt',action.payload.token)
            
            return {
                email:action.payload.email,
                token:action.payload.token,
                name:action.payload.name
            }
        }

    

        default:
            return state;
    }

}



export default combineReducers({
    userInfo
})
