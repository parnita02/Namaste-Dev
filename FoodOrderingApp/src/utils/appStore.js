import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
const appStore = configureStore({
  reducer: {
    //responsible to modify the appStore, combination of different small stores, for each slice we'll have a different reducer. It is the main big reducer which as an object stores all individual reducers
    cart: cartReducer,
  },
});
export default appStore;
