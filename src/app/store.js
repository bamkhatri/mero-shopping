import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/slices/cartSlice'
import productReducer from '../features/slices/productSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    cartSlice: cartReducer,
  },
})
