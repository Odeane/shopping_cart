import { combineReducers } from 'redux'
import { productsReducer } from './productReducers'
import { cartReducer } from './cartReducer'

export default combineReducers({
  productState: productsReducer,
  cartStatus: cartReducer
})