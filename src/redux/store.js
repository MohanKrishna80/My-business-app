import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import Search from "./slices/searchSlice"

const store = configureStore({
  reducer: {
    cart: cartSlice,
    Search:Search,
  },
});

export default store;
