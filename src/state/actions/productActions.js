import axios from 'axios'
import { fetchProductUrl } from './urls'
import { FETCHING_PRODUCTS, FETCH_PRODUCTS, FAIL_FETCH_PRODUCTS } from './types'

export const fetchProducts = () => async dispatch => {
  dispatch({ type: FETCHING_PRODUCTS })

  try {
    let response = await axios.get(fetchProductUrl)
    const { status, data } = response

    if (status === 404) {
      dispatch({ type: FAIL_FETCH_PRODUCTS, payload: 'No data was found' })
      return
    }
    if (status > 399) {
      dispatch({ type: FAIL_FETCH_PRODUCTS, payload: 'Something is wrong with the request can you refresh your browser and try again' })
      return
    }
    dispatch({
      type: FETCH_PRODUCTS,
      payload: data
    })
  } catch (error) {
    dispatch({ type: FAIL_FETCH_PRODUCTS, payload: error.message })
  }

}
