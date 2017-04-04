import cart from './cart';
import api from './api';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cart,
    api
});

export default rootReducer;
