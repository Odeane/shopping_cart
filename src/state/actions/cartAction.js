import { UPDATE_CART_PRODUCT } from './types.js'

export const updateCartProduct = (newProduct) => dispatch => {

  console.log(newProduct,' ===> from cartAction')
  dispatch({ type: UPDATE_CART_PRODUCT, payload: newProduct })
  return
}