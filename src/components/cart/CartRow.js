import React from 'react'
import './cart.css'

function CartRow({ heading, price, quantity, add, product, remove }) {

  return (
    <section className='cart__row'>
      <div className='cart__description__column'>
        <h2 className='cart__description__header'>{heading}</h2>
        <span className='cart__description__price'>{price}</span>
      </div>
      <div className='spacer' />
      <div className="cart__selector">
        <div className='cart__button__row'>
          <button className='cart__button' onClick={() => remove(product)}>-</button>
          <button className='cart__button no__cursor'>{quantity}</button>
          <button className='cart__button' onClick={() => add(product)}>+</button>
        </div>
      </div>
    </section>
  )
}

export default CartRow
