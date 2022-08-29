import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, SortPropertyEnum } from "./types";

const initialState = {
  item: {
    name: "цене(desc)",
    sortProperty: SortPropertyEnum.DPRICE
  },
  open: false
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setStateItem: (state, action: PayloadAction<Item>) => {
      state.item = action.payload;
    },
    setOpen: (state,action: PayloadAction<boolean>) => {
        state.open = action.payload;
    }

  }
});

export const {
  setStateItem,
  setOpen
} = filterSlice.actions;

export default filterSlice.reducer;