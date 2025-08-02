import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchtheme = createAsyncThunk("theme/fetchtheme", async () => {
  const response = await axios.get("/dummytheme.json");
  return response.data;
});
