import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../api/products/productsSlice"; 
import cartReducer from "../api/carts/cartSlice"; // import the reducer, not the slice


const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      immutableCheck: process.env.NODE_ENV !== "production",
      serializableCheck: process.env.NODE_ENV !== "production",
    });
    return middlewares;
  },
});

export default store;
