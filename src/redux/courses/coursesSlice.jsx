import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "./coursesThunk.jsx";

import { coursesInitialState } from "./coursesInitialState.jsx";

const coursesSlice = createSlice({
  name: "courses",
  initialState: coursesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
