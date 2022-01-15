import { combineReducers } from 'redux';
import { RecordTypes } from '../actionTypes';

const INIT_STATE = {
    savedRecords: []
}

const recordsInfo = (state = INIT_STATE, action) => {

    switch (action.type) {

        case RecordTypes.FETCH_SAVED_CURRENCY_DATA: {
            let newArray = [];
            action.payload.data.map(e => {
                newArray.push({
                    ...e,
                    key: e._id.toString()
                })
            })
            return {
                ...state,
                savedRecords: {
                    data:
                    [...newArray], total_pages: action.payload.total_pages, current_page: action.payload.current_page
                }
            }
        }


        default:
            return state;
    }

}

export default combineReducers({
    recordsInfo
})

