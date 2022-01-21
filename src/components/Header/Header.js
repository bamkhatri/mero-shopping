import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Dropdown from './Dropdown'

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const { totalProduct } = useSelector((state) => state.cartSlice)

  return (
    <header>
      <div className='header'>
        <Link to='/'>
          <h2 className='heading'>Mero Shopping</h2>
        </Link>
        <div
          className='category'
          onMouseEnter={() => setOpenDropdown(true)}
          onMouseLeave={() => setOpenDropdown(false)}
        >
          <h2 className='head'>Category</h2>
          {openDropdown && <Dropdown />}
        </div>
        <h2 className='head'>Price</h2>
        <Link to='/cart'>
          <div className='nav-bag'>
            <i className='fas fa-shopping-cart'></i> Cart
            <span className='cart-quantity'>
              <span>{totalProduct}</span>
            </span>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
