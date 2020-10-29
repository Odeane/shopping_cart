import { UPDATE_CART_PRODUCT } from './types.js'

export const updateCartProduct = (products) => async dispatch => {
  dispatch({ type: UPDATE_CART_PRODUCT, payload: products })
  return
} 