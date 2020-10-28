import UPDATE_CART_PRODUCT from './types.js'

export const updateCartProduct = () => dispatch => {
console.log('Updating cart ===> from cartAction')
  dispatch({ type: UPDATE_CART_PRODUCT})
}