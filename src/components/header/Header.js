import React,{useState} from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import Popover from '@material-ui/core/Popover';



function Header() {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = e => {
    debugger
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => setAnchorEl(null)

  const open = Boolean(anchorEl);

  return (
    <nav className='header-container'>
      <Badge badgeContent={4} color='primary'>
        <ShoppingCartIcon onClick={handleClick} className='cart-icon' />
      </Badge>
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
      <h1>Testing modal</h1>
      </Popover>
      </nav>
  )
}

export default Header
