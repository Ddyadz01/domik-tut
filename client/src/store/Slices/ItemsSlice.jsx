import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "pending",
};

export const ItemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload.data;
      state.status = action.payload.status;
    },
  },
});

export const { setProducts } = ItemsSlice.actions;

export default ItemsSlice.reducer;
