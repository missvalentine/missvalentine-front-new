
   
import { combineReducers } from 'redux';
// Reducers
import authReducer from './authReducer';
import productListReducer from './productListReducer';
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  authState: authReducer,
  productListState: productListReducer,
  categoryState: categoryReducer,
  cartState: cartReducer,
});