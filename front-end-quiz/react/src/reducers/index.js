import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import getReducer from './getReducer';

export default combineReducers({
    gets: getReducer,
    router: routerReducer
});