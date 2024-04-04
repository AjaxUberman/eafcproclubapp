import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    player: "",
  },
  reducers: {
    setPlayer: (state, action) => {
      state.player = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlayer } = playerSlice.actions;

export default playerSlice.reducer;
