
   
import { combineReducers } from 'redux';
// Reducers
import productListReducer from './productListReducer';
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  productListState: productListReducer,
  categoryState: categoryReducer,
  cartState: cartReducer,
});