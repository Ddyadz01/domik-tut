import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  status: 'pending',
};

export const ItemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.data.products;
      state.status = action.payload.status;
    },
  },
});

export const { setProducts } = ItemsSlice.actions;

export default ItemsSlice.reducer;
