import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'

function Header() {

  

  return (
    <nav className='header-container'>
      <Badge badgeContent={4} color='primary'>
      <ShoppingCartIcon className='cart-icon' />
      </Badge>
      </nav>
  )
}

export default Header
