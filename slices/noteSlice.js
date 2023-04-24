import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  message: "",
};

export const noteSlice = createSlice({
  name: "noteData",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});
export const { setTitle, setMessage } = noteSlice.actions;
export const selectNoteTitle = (state) => state.noteData.title;
export const selectNoteMessage = (state) => state.noteData.message;

export default noteSlice.reducer;
