import { createSlice } from "@reduxjs/toolkit";

const Search = createSlice({
  name: "Search",
  initialState: "",

  reducers: {
    setValue: (state, action) => {
      return action.payload;
    },
  },
});

export const { setValue } = Search.actions;
export default Search.reducer;
