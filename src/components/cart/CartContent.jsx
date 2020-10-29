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

  const removeFromProductQuantity = product => {
    const { quantity } = product
    const filteredCartContent = cartContent.filter(x => x._id !== product._id)

    if (quantity > 1) {
      const newProduct = { ...product, quantity: quantity - 1 }
      const newContent = [...filteredCartContent, newProduct]
      updateCartProduct(newContent)
    }
  }

  const calculateTotal = cartContent =>
    cartContent.reduce((prev, product) => {
      const { quantity } = product
       const price =  product.price 
       return prev + (price * quantity)
    }, 0)


  return (
    <div className='cart__content__container'>
      <div>
      {
        cartContent.map(product => {
          const { name, price, quantity = 1 } = product
          return (
            <CartRow
            heading={name}
            quantity={quantity}
            price={price}
            add={addToProductQuantity}
            remove={removeFromProductQuantity}
            product={product}
            />
            )
          })
        }
      </div>
      <div className='cart__row__total'>
        <span>Total</span>
        <span>${calculateTotal(cartContent)}.00</span>
      </div>
    </div>
  )
}

export default CartContent
