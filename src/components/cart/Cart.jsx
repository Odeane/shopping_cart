import React from 'react'
import Popover from '@material-ui/core/Popover';
import CartContent from './CartContent'
import { connect } from 'react-redux';
import { updateCartProduct } from '../../state/actions/cartAction'


function Cart({ anchorEl, handleClose, ...props }) {
  console.log(props, 'from cart')
  const open = Boolean(anchorEl);
  return (
    <div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <CartContent cartContent={props.cartProducts} updateCartProduct={props.updateCartProduct} />
      </Popover>
    </div>
  )
}

const mapStateToProps = ({ cartStatus }) => {
  console.log(cartStatus.cartProducts, ' ==>from productlist')
  return {
    cartProducts: cartStatus.cartProducts
  }
}

export default connect(mapStateToProps, { updateCartProduct })(Cart)
