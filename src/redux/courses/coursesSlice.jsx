import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "./coursesThunk";

const applyFilters = (allData, filter, searchTerm) => {
  return allData.filter((course) => {
    const matchesFilter =
      filter === "all" ||
      course.tags
        .map((tag) => tag.toLowerCase())
        .includes(filter.toLowerCase());
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
};

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    allData: [],
    data: [],
    status: "idle",
    error: null,
    filter: "all",
    searchTerm: "",
    allFilters: [],
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.data = applyFilters(state.allData, state.filter, state.searchTerm);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.data = applyFilters(state.allData, state.filter, state.searchTerm);
    },
    getAllFilters: (state) => {
      const tagSet = new Set();
      state.allData.forEach((course) => {
        course.tags.forEach((tag) => {
          tagSet.add(tag.toLowerCase());
        });
      });
      state.allFilters = ["all", ...Array.from(tagSet)];
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
        state.data = applyFilters(
          action.payload,
          state.filter,
          state.searchTerm
        );
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFilter, setSearchTerm, getAllFilters } = coursesSlice.actions;
export default coursesSlice.reducer;
