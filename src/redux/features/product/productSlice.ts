import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  status: boolean;
  priceRange: number;
}

const initialState: ProductState = {
  status: false,
  priceRange: 350,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleStock: (state) => {
      state.status = !state.status;
    },

    setPriceRange: (state, action: PayloadAction<number>) => {
      state.priceRange = action.payload;
    },
  },
});

export const { toggleStock, setPriceRange } = cartSlice.actions;
export default cartSlice.reducer;
