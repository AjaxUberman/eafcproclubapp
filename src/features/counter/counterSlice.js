import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    player: "",
    search: [],
    active: false,
  },
  reducers: {
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlayer, setSearch, setActive } = playerSlice.actions;

export default playerSlice.reducer;
