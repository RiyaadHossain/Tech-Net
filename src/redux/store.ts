import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productRedecuer from './features/product/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productRedecuer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
