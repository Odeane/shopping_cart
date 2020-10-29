import React from 'react'
import CartRow from './CartRow'

function CartContent({ cartContent = []}) {
 
  return (
    <div>
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
