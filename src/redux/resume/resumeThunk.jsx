import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchresume = createAsyncThunk("resume/fetchresume", async () => {
  const response = await axios.get("/dummyresume.json");
  return response.data;
});
