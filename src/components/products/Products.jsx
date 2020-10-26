import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../../state/actions/productActions'
import { useEffect } from 'react';

function Products(props) {
  
  useEffect(() => {
    props.fetchProducts()
  }, [])
  
  return (
    <div>
      <h1>Products</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  }

export default connect(mapStateToProps, { fetchProducts })(Products)
