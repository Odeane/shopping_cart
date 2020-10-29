import React from 'react'
import CartRow from './CartRow'
import './cart.css'

function CartContent({ cartContent = [] }) {

  return (
    <div className='cart__content__container'>
      {
        cartContent.map(product => {
          const { name, price, quantity = 1 } = product
          return (
            <CartRow
              heading={name}
              quantity={quantity}
              price={price}
            />
          )
        })
      }
    </div>
  )
}

export default CartContent
