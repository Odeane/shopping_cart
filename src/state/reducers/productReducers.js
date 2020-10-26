import { initialState } from '../store/initialState'
import { FETCH_PRODUCTS } from "../actions/types"

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
 }