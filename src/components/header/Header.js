import React, { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import Cart from '../cart/Cart';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = e => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <nav className='header-container'>
      <Badge badgeContent={4} color='primary'>
        <ShoppingCartIcon onClick={handleClick} className='cart-icon' />
      </Badge>
      <Cart anchorEl={anchorEl} handleClose={handleClose} />
    </nav>
  )
}

export default Header
