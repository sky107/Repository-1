

import { combineReducers } from "redux";


import auth from './auth';
import records from './records';


const appReducers= combineReducers({
    auth,
    records
})

const rootReducer=(state,action)=>{
    return appReducers(state,action);
}

export default rootReducer;