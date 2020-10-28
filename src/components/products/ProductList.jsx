import React from 'react'
import ProductCard from './ProductCard'
import './product.css'

function ProductList({ products = [] }) {

  return products.length > 0 ? (
    <div className="body">
      {
        products.map(product => {
          return (
            <ProductCard product={product} />
          )
        })}
    </div>
  ) : (
      <div></div>
    )
}

export default ProductList
