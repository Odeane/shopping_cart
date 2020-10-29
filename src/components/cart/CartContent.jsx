import React from 'react'
import CartRow from './CartRow'
import './cart.css'

function CartContent({ cartContent = [], updateCartProduct }) {


  const addToProductQuantity = (product) => {
    const { quantity } = product

    const filteredCartContent = cartContent.filter(x => x._id !== product._id)
    const newProduct = { ...product, quantity: quantity + 1 }
    const newContent = [...filteredCartContent, newProduct]
    updateCartProduct(newContent)
  }


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
              add={addToProductQuantity}
              product={product}
            />
          )
        })
      }
    </div>
  )
}

export default CartContent
