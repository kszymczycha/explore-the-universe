import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import imageReducer from './imageReducer';

export default combineReducers({
    items: itemReducer,
    images: imageReducer
})