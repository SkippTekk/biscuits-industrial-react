import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbar-slice";

const store = configureStore({
  reducer: { navbar: navbarReducer },
});

export default store;
