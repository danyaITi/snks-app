import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISneakers } from '../../models/models'
import { fetchFullSnk } from '../api/snk.api'

export enum SneakersStatus {
  ERROR = 'Error',
  SUCCES = 'Succes',
  LOADING = 'Loading'

}

interface FullState {
  items: ISneakers | null ,
  active: boolean,
  sizes: number[],
  status: string
}

const initialState:FullState = {
  items: null,
  status: SneakersStatus.LOADING,
  active: false,
  sizes: JSON.parse(localStorage.getItem('size') ?? '[]')
}

export const FullSlice = createSlice({
  name: 'full',
  initialState,
  reducers: {
    setActive: (state,action: PayloadAction<boolean>) => {
      state.active = action.payload
    },
    setSize: (state,action: PayloadAction<number[]>) => {
      state.sizes = action.payload
      localStorage.setItem('size', JSON.stringify(state.sizes))
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFullSnk.rejected, (state) => {
      state.status = SneakersStatus.ERROR
      state.items = null
    });
    builder.addCase(fetchFullSnk.fulfilled, (state,action) => {
      state.status = SneakersStatus.SUCCES
      state.items = action.payload
    });
    builder.addCase(fetchFullSnk.pending, (state) => {
      state.status = SneakersStatus.LOADING
      state.items = null
    })
  }
})

export const { setActive, setSize } = FullSlice.actions
export default FullSlice.reducer