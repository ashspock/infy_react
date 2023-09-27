import { combineReducers } from 'redux';
import { laptopReducer } from './laptops.reducer';
import { mobileReducer } from './mobiles.reducer';

export const  rootReducer = combineReducers({ mobileReducer , laptopReducer });
