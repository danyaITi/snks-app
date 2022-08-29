import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { CartSliceState, TypesCart } from './types'

const initialState:CartSliceState = {
    cart: JSON.parse(localStorage.getItem('key') ?? '[]'),
    totalPrice: JSON.parse(localStorage.getItem('price') ?? '0'),
    active: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state,action: PayloadAction<TypesCart>) => {
        const findSnk = state.cart.find((el)=> el.id === action.payload.id)

        if(!findSnk){
            state.cart.push({
                ...action.payload,
                count: 1
            })  
        } else{
            findSnk.count++
        }

        localStorage.setItem('key', JSON.stringify(state.cart))

        state.totalPrice = state.cart.reduce(
            (sum: number, item: any) => item.price * item.count + sum,
            0
        );
        
        localStorage.setItem('price', JSON.stringify(state.totalPrice))

    },
    setActive: (state,action: PayloadAction<boolean>) => {
        state.active = action.payload
    },
    setDelete: (state,action: PayloadAction<number | undefined>) => {
        state.cart = state.cart.filter((obj) => obj.id !== action.payload);
        localStorage.setItem('key', JSON.stringify(state.cart))
    }, 
    setMinusSnk: (state, action: PayloadAction<number | undefined>) => {
        const findSnk = state.cart.find((el)=> el.id === action.payload)
        if(findSnk){
            findSnk.count-- 
        } 
    }
  },
 
})

export const selectById = (id: number) => (state: RootState) => state.cart.cart.find((obj) => obj.id === id);
export const { setCart, setActive, setDelete, setMinusSnk } = cartSlice.actions
export default cartSlice.reducer