import React from 'react'
import './product.css'

function ProductCard({ product, addToCart }) {
  const { name, m1, m2, price, unit } = product
  return (
    <div className='card'>
      <h2 className='header'>{name}</h2>
      <p className='m1'>{m1}</p>
      <p className='m2'>{m2}</p>
      <h6 className='marcador'>2 marcador</h6>
      <section className='price-row'>
        <span className='cost'>
          {price}&nbsp;{unit}
        </span>
        <button className='button' onClick={() => addToCart(product)} >Add To Cart</button>
      </section>
    </div>
  )
}

export default ProductCard
