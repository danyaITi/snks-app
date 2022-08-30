import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISneakers } from '../../models/models'
import { fetchSneakers } from '../api/snk.api'
import { SneakersSliceState, SneakersStatus } from './types'

const initialState:SneakersSliceState  = {
  items:[],
  status: SneakersStatus.LOADING,
  modalActive: false
}

export const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    setItems: (state,action:PayloadAction<ISneakers[]>) => {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.rejected, (state) => {
      state.status = SneakersStatus.ERROR
      state.items = []
    });
    builder.addCase(fetchSneakers.fulfilled, (state,action) => {
      state.status = SneakersStatus.SUCCES
      state.items = action.payload
    });
    builder.addCase(fetchSneakers.pending, (state) => {
      state.status = SneakersStatus.LOADING
      state.items = []
    })
  }
})

export const { setItems } = sneakersSlice.actions

export default sneakersSlice.reducer