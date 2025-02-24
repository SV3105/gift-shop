import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice"; // Import your cart slice

const store = configureStore({
  reducer: {
    cart: cartReducer,  // Add cart slice to store
  },
});

export default store;
