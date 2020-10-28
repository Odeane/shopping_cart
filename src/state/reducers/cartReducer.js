import { initialState } from '../store/initialState'
import { UPDATE_CART_PRODUCT } from "../actions/types"

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART_PRODUCT:
      return {
        ...state,
        cartProducts: action.payload
      }
    default:
      return state
  }
}