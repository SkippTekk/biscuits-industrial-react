import { createSlice } from "@reduxjs/toolkit";

const initState = {
  shipManu: false,
};

const navbarSlice = createSlice({
  name: "navbarSlice",
  initialState: initState,
  reducers: {
    setShipManu(state, action) {
      state.shipManu = !state.shipManu;
    },
  },
});

export const navbarActions = navbarSlice.actions;
export default navbarSlice.reducer;
