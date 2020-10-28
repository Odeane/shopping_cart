import React from 'react'
import ProductCard from './ProductCard'
import './product.css'
import { updateCartProduct } from "../../state/actions/cartAction";
import { connect } from 'react-redux';

function ProductList({ products = [], ...props }) {

  const addToCart = product => {
    const newProduct = { ...product, quantity: 1 }
    props.updateCartProduct(newProduct)
    // console.log(newProduct, 'cart product ===> adding to cart')
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


const mapStateToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, {updateCartProduct})(ProductList)
