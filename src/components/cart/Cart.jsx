import React from 'react'
import Popover from '@material-ui/core/Popover';
import CartContent from './CartContent'
import { connect } from 'react-redux';

function Cart({ anchorEl, handleClose, ...props }) {
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
        <CartContent cartContent={props.cartProducts} />
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

export default connect(mapStateToProps)(Cart)
