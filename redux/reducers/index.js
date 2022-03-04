
   
import { combineReducers } from 'redux';
// Reducers
import productListReducer from './productListReducer';

export default combineReducers({
  productListState: productListReducer,
});