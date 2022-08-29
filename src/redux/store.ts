import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import sneakers from './Sneakers/slice'
import cart from './Cart/slice';
import full from './Full/slice'
import fillter from './Fillter/slice'

export const store = configureStore({
  reducer: {
    sneakers,
    cart,
    full,
    fillter
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch =  useDispatch;