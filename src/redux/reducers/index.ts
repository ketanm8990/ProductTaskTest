
import { combineReducers } from 'redux';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';

import * as types from '../actions/types';

const appReducer = combineReducers({
  product: productReducer,
  category: categoryReducer
});


const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

export default rootReducer;