import React from 'react'

function CartRow({ heading, price, quantity }) {
  return (
    <section>
      <div>
        <h2>{heading}</h2>
        <span>{price}</span>
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
