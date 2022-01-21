import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import cartSlice from '../../features/slices/cartSlice'
import { removeFromCart } from '../../features/slices/cartSlice'
import './Cart.css'
const Cart = () => {
  const cart = useSelector((state) => state.cartSlice)
  const dispatch = useDispatch()

  //To handle remove event
  const handlRemove = (item) => {
    dispatch(removeFromCart(item))
  }

  return (
    <div className='cart-container'>
      <h2>Shoping Cart</h2>
      {cart.cartItem.length === 0 ? (
        <div className='cart-empty'>
          <p>Cart is currently Empty</p>
          <div className='start-shopping'>
            <Link to='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='currentColor'
                className='bi bi-caret-left-fill'
                viewBox='0 0 16 16'
              >
                <path d='m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z' />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className='titles'>
            <h3 className='product-title'>Product</h3>
            <h3 className='price'>Price</h3>
            <h3 className='quantity'>Quantity</h3>
            <h3 className='total'>Total Amount</h3>
          </div>
          <div className='cart-items'>
            {cart.cartItem?.map((item) => {
              const image =
                'https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg'
              return (
                <div className='cart-item' key={item.id}>
                  <div className='cart-product'>
                    <img src={image} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <p>Stock: {item.stock}</p>
                      <button
                        onClick={() => {
                          handlRemove(item)
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className='cart-product-price'>{item.price}</div>
                  <div className='cart-product-quantity'>
                    <button>-</button>
                    <div className='count'>{item.productQty}</div>
                    <button>+</button>
                  </div>

                  <div className='cart-product-total-price'>
                    {JSON.stringify(item.price)
                      .replace('"', ' ')
                      .replace('$', '')
                      .replace('"', '') * item.productQty}
                  </div>
                </div>
              )
            })}
          </div>
          <div className='cart-summary'>
            <button className='clear-btn'>Clear Cart</button>
            <div className='cart-checkout'>
              <div className='subtotal'>
                <span>Subtotal</span>
                <span className='amount'>${cartSlice.totalProductAmount}</span>
              </div>
              <p>Including Taxes and Shipping Price</p>
              <button>Check Out</button>
              <div className='continue-shopping'>
                <Link to='/'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    className='bi bi-caret-left-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z' />
                  </svg>
                  <span>Start Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
