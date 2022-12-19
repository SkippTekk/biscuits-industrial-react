import { createSlice } from "@reduxjs/toolkit";

const initState = {
  bpoME: 1,
  buildQuantity: 1,
  citadel: 0,
  citadelRig: null,
  location: null,
};

const shipManuSlice = createSlice({
  name: "shipManuSlice",
  initialState: initState,
  reducers: {
    setBpoME(state, action) {
      state.bpoME = action.payload;
    },
    setBuildQuantity(state, action) {
      state.buildQuantity = action.payload;
    },
    setCitadel(state, action) {
      state.citadel = action.payload;
    },
    setCitadelRig(state, action) {
      state.citadelRig = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const shipManuActions = shipManuSlice.actions;
export default shipManuSlice.reducer;
