import axios from 'axios'
import { fetchProductUrl} from './urls'
import { FETCH_PRODUCTS } from './types'

export const fetchProducts = () => async dispatch => {
  let response = await axios.get(fetchProductUrl)
  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data
  })
}
