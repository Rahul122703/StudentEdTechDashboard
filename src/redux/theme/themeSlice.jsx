import { createSlice } from "@reduxjs/toolkit";
import { fetchtheme } from "./themeThunk.jsx";

import { themeInitialState } from "./themeInitialState.jsx";

const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchtheme.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchtheme.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchtheme.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default themeSlice.reducer;
