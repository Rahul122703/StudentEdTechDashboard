import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "./coursesThunk";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    allData: [],
    data: [],
    status: "idle",
    error: null,
    filter: "all",
  },
  reducers: {
    setFilter: (state, action) => {
      const selectedFilter = action.payload;
      console.log("Filter applied:", selectedFilter);
      state.filter = selectedFilter;

      if (selectedFilter === "all") {
        state.data = state.allData;
      } else {
        state.data = state.allData.filter((course) => {
          console.log(course);
          return course.tags.includes(selectedFilter);
        });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allData = action.payload;
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFilter } = coursesSlice.actions;
export default coursesSlice.reducer;
