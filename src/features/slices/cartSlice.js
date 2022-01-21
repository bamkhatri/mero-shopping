import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
const sliceName = 'cartSlice'

const initialState = {
  cartItem: localStorage.getItem('cartItem')
    ? JSON.parse(localStorage.getItem('cartItem'))
    : [],
  totalProduct: 0,
  totalProductAmount: 0,
}

const cartSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addToCart(state, action) {
      const indexOfItem = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      )
      if (indexOfItem >= 0) {
        state.cartItem[indexOfItem].productQty += 1
        toast.info(`${action.payload.name} quantity is increasrd `, {
          position: 'bottom-right',
        })
      } else {
        const tempProduct = { ...action.payload, productQty: 1 }
        state.cartItem.push(tempProduct)
        toast.success(`${action.payload.name} is added to cart `, {
          position: 'bottom-right',
        })
      }
      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
    },
    removeFromCart(state, action) {
      const nextCartItem = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      )
      state.cartItem = nextCartItem
      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
      toast.error(`${action.payload.name} is removed from cart `, {
        position: 'bottom-right',
      })
    },
    decreaseCartQuantity(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      )
      if (state.cartItem[itemIndex].productQty > 1) {
        state.cartItem[itemIndex].productQty -= 1
        toast.info(`Decreased ${action.payload.name} cart quantity `, {
          position: 'bottom-right',
        })
      } else if (state.cartItem[itemIndex].productQty === 1) {
        const nextCartItem = state.cartItem.filter(
          (item) => item.id !== action.payload.id
        )
        state.cartItem = nextCartItem
        toast.error(`${action.payload.name} is removed from cart `, {
          position: 'bottom-right',
        })
      }
      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
    },
    increasedCartQuantity(state, action) {
      console.log(action.payload.stock)
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      )
      if (state.cartItem[itemIndex].productQty < action.payload.stock) {
        state.cartItem[itemIndex].productQty += 1
        toast.info(`Increased ${action.payload.name} cart quantity `, {
          position: 'bottom-right',
        })
      } else if (
        state.cartItem[itemIndex].productQty === action.payload.stock
      ) {
        const nextCartItem = state.cartItem.filter(
          (item) => item.id !== action.payload.id
        )
        state.cartItem = nextCartItem
        toast.error(`${action.payload.name} is out of Stock `, {
          position: 'bottom-right',
        })
      }
      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
    },
    clearCart(state, action) {
      state.cartItem = []
      toast.error(`Cart Clear`, {
        position: 'bottom-right',
      })
      localStorage.setItem('cartItem', JSON.stringify(state.cartItem))
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartItem.reduce(
        (totalCart, item) => {
          const { price, productQty } = item
          console.log(price)
          const itemTotal =
            JSON.stringify(price)
              .replace('"', '')
              .replace('$', '')
              .replace('"', '') * productQty
          totalCart.total += itemTotal
          totalCart.quantity += productQty

          return totalCart
        },
        {
          total: 0,
          quantity: 0,
        }
      )
      state.totalProduct = quantity
      state.totalProductAmount = total
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  decreaseCartQuantity,
  increasedCartQuantity,
  clearCart,
  getTotal,
} = cartSlice.actions
export default cartSlice.reducer
