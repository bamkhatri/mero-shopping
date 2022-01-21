import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Status from '../../components/Constant/Status'

const sliceName = 'product'
const initialState = {
  data: [],
  status: Status.IDLE,
  error: null,
}

export const fetchProduct = createAsyncThunk(
  `${sliceName}/fetchProduct`,
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://electronic-ecommerce.herokuapp.com/api/v1/product ',
        payload
      )

      return response.data
    } catch (error) {
      if (!error.response) {
        throw error
      }
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const productSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = Status.PENDING
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = Status.ERROR
        state.error = action.payload
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = Status.SUCCESS
        state.data = action.payload.data.product
        console.log(state.data)
        state.error = null
      })
  },
})

export default productSlice.reducer
