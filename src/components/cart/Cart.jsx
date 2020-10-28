import React from 'react'
import Popover from '@material-ui/core/Popover';
import CartContent from './CartContent'

function Cart({ anchorEl, handleClose }) {
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
        <h1>Testing</h1>
        <CartContent/>
      </Popover>
    </div>
  )
}

export default Cart
