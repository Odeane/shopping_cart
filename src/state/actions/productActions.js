import axios from 'axios'
import { FETCH_PRODUCTS } from './types'

export const fetchProducts = () => async dispatch => {
  let response = await axios.get('https://falconx-development.coffee4tech.net/products/public?country=GB')
  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data
  })
}
