import { initialState } from '../store/initialState'
import { FETCH_PRODUCTS, FETCHING_PRODUCTS, FAIL_FETCH_PRODUCTS} from "../actions/types"

export const productsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCHING_PRODUCTS:
      return {
        ...state,
        fetchingProductList: true,
        fetchingProductListerror: null,
        productsList: []
      }
    case FAIL_FETCH_PRODUCTS:
      return {
        ...state,
        fetchingProductList: false,
        fetchingProductListerror: null,
        productsList: []
      }
    
    case FETCH_PRODUCTS:
      return {
        ...state,
        productsList: action.payload,
        fetchingProductList: false,
        fetchingProductListerror: null
      }
    default:
      return state;
  }
 }