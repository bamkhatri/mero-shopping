import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../features/slices/productSlice'
export const store = configureStore({
  reducer: {
    product: productSlice,
  },
})
