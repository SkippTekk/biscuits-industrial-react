import { configureStore } from "@reduxjs/toolkit";
import shipManuReducer from "./shipmanu-slice";

const store = configureStore({
  reducer: { shipManu: shipManuReducer },
});

export default store;
