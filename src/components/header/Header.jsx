import React, { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import Cart from '../cart/Cart';
import './header.css'

function Header() {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = e => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <nav className='header__container'>
      <Badge badgeContent={4} color='primary'>
        <ShoppingCartIcon onClick={handleClick} className='cart__icon' />
      </Badge>
      <Cart anchorEl={anchorEl} handleClose={handleClose} />
    </nav>
  )
}

export default Header
