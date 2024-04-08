import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    player: "",
    search: [],
  },
  reducers: {
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
    setSearch: (state, action) => {
      state.Search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlayer, setSearch } = playerSlice.actions;

export default playerSlice.reducer;
