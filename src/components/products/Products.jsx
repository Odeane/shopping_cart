import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../state/actions/productActions'
import { useEffect } from 'react';
import ProductList from './ProductList';

function Products(props) {
  let { products, fetchingProducts, errors } = props

  useEffect(() => {
    props.fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (fetchingProducts) {
    return <h1>Currently fetching products</h1>
  }
  if (errors) {
    return <h1>{errors}</h1>
  }

  return (
    <div className='products'>
      <ProductList products={products} />
    </div>
  )
}

const mapStateToProps = ({ productState }) => {
  return {
    products: productState.productsList.docs,
    fetchingProducts: productState.fetchingProductList,
    errors: productState.fetchingProductListerror
  }
}

export default connect(mapStateToProps, { fetchProducts })(Products)
