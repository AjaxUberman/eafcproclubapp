import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    player: playerReducer,
  },
});
