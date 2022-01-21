import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const { totalProduct } = useSelector((state) => state.cartSlice)

  return (
    <header>
      <div className='header'>
        <Link to='/'>
          <h2 className='heading'>Mero Shopping</h2>
        </Link>

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
