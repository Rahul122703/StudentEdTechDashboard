import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchmessages = createAsyncThunk(
  "messages/fetchmessages",
  async () => {
    const response = await axios.get("/data.json");
    const { messages } = response.data;
    console.log("messages");
    console.log(messages);
    return messages;
  }
);
