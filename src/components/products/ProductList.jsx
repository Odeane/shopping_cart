import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ products = [] }) {
  console.log(products)

  return products.length > 0 ? (
    <div>
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
