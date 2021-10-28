import { NEW_ZIP } from './geoType';

const initialState = {
    zip: 'unknown',
    county: 'unknown'
}

const geoReducer = (state = initialState, action) => {
    switch(action.type){
        case NEW_ZIP: return {
            ...state,
            zip: action.zip,
            county: action.county
        }
        default: return state;
    }
}

export default geoReducer;


/*
import { NEW_ZIP, CURRENT_ZIP } from './geoType';
import { combineReducers } from 'redux';

const defaultZip = {
    zip: 'none'
}

const zipReducer = (state = defaultZip, action) => {
    switch(action.type) {
        case NEW_ZIP: return {
            ...state,
            zip: action.zip
        }
        case CURRENT_ZIP:  
            return state;
        default: 
            return state
    }
}

const zipcodeFinder = combineReducers({
    zipReducer
});

export default zipcodeFinder;
*/