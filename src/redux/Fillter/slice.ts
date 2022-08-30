import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, SortPropertyEnum } from "./types";

const initialState = {
  item: {
    name: "цене(desc)",
    sortProperty: SortPropertyEnum.DPRICE
  },
  open: false,
  pageNumber: 1,
  snkPerPage: 3,
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
    },
    setPageNumber: (state,action:PayloadAction<number>) => {
      state.pageNumber = action.payload
    },
    setStateFilters(state, action) {
      state.item = action.payload.selected;
      state.pageNumber = Number(action.payload.currentPage);
    },
  }
});

export const {
  setStateItem,
  setOpen,
  setPageNumber,
  setStateFilters
} = filterSlice.actions;

export default filterSlice.reducer;