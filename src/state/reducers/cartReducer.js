import { initialState } from '../store/initialState'
import { UPDATE_CART_PRODUCT } from "../actions/types"

export const cartReducer = (state = initialState, action) => {
  console.log(action, '===> from cartReducer')
  switch (action.type) {
    case UPDATE_CART_PRODUCT:
      return {
      }
    default:
      return state;
  }
}