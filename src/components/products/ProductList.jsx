import React from 'react'
import ProductCard from './ProductCard'
import './product.css'

function ProductList({ products = [] }) {

  const addToCart = products => {
    console.log('you clicked the addtocart function sucessfully')
  }

  return products.length > 0 ? (
    <div className="body">
      {
        products.map(product => {
          return (
            <ProductCard
              addToCart={addToCart}
              product={product} />
          )
        })}
    </div>
  ) : (
      <div></div>
    )
}

export default ProductList
