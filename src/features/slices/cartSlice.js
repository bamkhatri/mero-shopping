import { createSlice } from '@reduxjs/toolkit'
const sliceName = 'cartSlice'

const initialState = {
  cartItem: [],
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
        state.cartItem[indexOfItem].productAmount += 1
      } else {
        const tempProduct = { ...action.payload, productAmount: 1 }
        state.cartItem.push(tempProduct)
      }
    },
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
