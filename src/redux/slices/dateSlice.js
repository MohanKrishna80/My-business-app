import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: {
    eventDate: "",
  },
  reducers: {
    setEventDate: (state, action) => {
      state.eventDate = action.payload;
    },
  },
});

export const { setEventDate } = dateSlice.actions;
export default dateSlice.reducer;
