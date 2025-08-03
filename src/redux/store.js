import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/coursesSlice";
import messageReducer from "./messages/messagesSlice";
import themeReducer from "./theme/themeSlice";
export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    messages: messageReducer,
    theme: themeReducer,
  },
});
