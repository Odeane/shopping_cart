import React from 'react'
import './cart.css'

function CartRow({ heading, price, quantity }) {
  return (
    <section className='cart__row'>
      <div className='cart__description__colomn'>
        <h2 className='cart__description__header'>{heading}</h2>
        <span className='cart__description__price'>{price}</span>
      </div>
      <div>
        <button>-</button>
        <button>{quantity}</button>
        <button>+</button>
      </div>
    </section>
  )
}

export default CartRow
