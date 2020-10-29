import React from 'react'
import ProductCard from './ProductCard'
import './product.css'
import { updateCartProduct } from "../../state/actions/cartAction";
import { connect } from 'react-redux';

function ProductList({ products = [], ...props }) {
  
  const addToCart = product => {
    
    const { cartProducts = [] } = props || {}

    const newProduct = { ...product, quantity: 1 }
    const cleanedDuplicatesProducts = cartProducts.filter(
      x => x._id !== product._id
    )
    
    const newCartProducts = [...cleanedDuplicatesProducts, newProduct]

    props.updateCartProduct(newCartProducts)
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


const mapStateToProps = ({ cartStatus }) => {
  // console.log(cartStatus.cartProducts, ' ==>from productlist')
  return {
    cartProducts: cartStatus.cartProducts
  }
}

export default connect(mapStateToProps, { updateCartProduct })(ProductList)
