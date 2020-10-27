import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../state/actions/productActions'
import { useEffect } from 'react';

function Products(props) {

  let products = props.products

  useEffect(() => {
    props.fetchProducts()
  }, [])


  const productList = products ? (
    products.map((product) => {
      return (
        <div key={product._id} className="product">
          <h1>{product.name}</h1>
          <p>{product.m1}</p>
          <p>{product.m2}</p>
          <span>2 marcador</span>
          <span>{product.price}{product.unit}</span>
          <button>Add To Cart</button>
        </div>
      )
    })
  ) : (
      <div>No products found!!</div>
    )

  return (
    <div className='products'>
      {productList}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products.productsList.docs
  }
}

export default connect(mapStateToProps, { fetchProducts })(Products)
