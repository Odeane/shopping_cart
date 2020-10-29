import React, { useState } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import Cart from '../cart/Cart';
import './header.css'
import { connect } from 'react-redux';

function Header({cartProducts}) {

  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = e => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <nav className='header__container'>
      <Badge badgeContent={cartProducts.length} color='primary'>
        <ShoppingCartIcon onClick={handleClick} className='cart__icon' />
      </Badge>
      <Cart anchorEl={anchorEl} handleClose={handleClose} />
    </nav>
  )
}

const mapStateToProps = ({cartStatus}) => {
  return {
     cartProducts: cartStatus.cartProducts
  }
}

export default connect(mapStateToProps, {})(Header)
