import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./slices/noteSlice";

const store = configureStore({
  reducer: {
    noteData: noteReducer,
  },
});

export default store;
