import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await axios.get("/data.json");
    const { courses } = response.data;
    console.log("courses");
    console.log(courses);
    return courses;
  }
);
