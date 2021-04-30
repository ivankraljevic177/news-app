import { combineReducers } from 'redux';
import news from './news';


let reducers = {
 news
};

const rootReducer = combineReducers(reducers);

export default rootReducer;