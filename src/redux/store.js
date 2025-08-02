import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/coursesSlice";
import resumeReducer from "./resume/resumeSlice";
import themeReducer from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    resume: resumeReducer,
    theme: themeReducer,
  },
});
