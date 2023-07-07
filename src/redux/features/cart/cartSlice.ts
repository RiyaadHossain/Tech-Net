/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../types/globalTypes';

interface CartState {
  products: IProduct[];
  total: number;
}

const initialState: CartState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const productExist = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (productExist) {
        productExist.quantity = productExist.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;
    },

    minusQuanitty: (state, action: PayloadAction<IProduct>) => {
      const productExist = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (productExist && productExist.quantity! > 1) {
        productExist.quantity = productExist.quantity! - 1;
        state.total -= action.payload.price;
      }
    },

    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );

      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, minusQuanitty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// export const selectProducts = (state: RootState) => state.cart.products;
