import { combineReducers } from 'redux';
import productReducer from '../product/productReducer';


export default combineReducers({
  products: productReducer,
})
