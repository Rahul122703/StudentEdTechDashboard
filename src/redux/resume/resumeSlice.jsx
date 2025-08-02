import { createSlice } from "@reduxjs/toolkit";
import { fetchresume } from "./resumeThunk.jsx";

import { resumeInitialState } from "./resumeInitialState.jsx";

const resumeSlice = createSlice({
  name: "resume",
  initialState: resumeInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchresume.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchresume.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchresume.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default resumeSlice.reducer;
