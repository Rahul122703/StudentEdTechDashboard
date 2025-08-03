import { createSlice } from "@reduxjs/toolkit";
import { fetchmessages } from "./messagesThunk.jsx";

const initialState = {
  allMessagesData: [],
  filterMessageData: [],
  status: "idle",
  error: null,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setFilteredMessages: (state, action) => {
      state.filterMessageData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchmessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchmessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allMessagesData = action.payload;
        state.filterMessageData = action.payload;
      })
      .addCase(fetchmessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setFilteredMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
