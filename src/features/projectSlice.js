import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import projectAPI from "@/services/projectAPI";
import Cookies from "js-cookie";

const initialState = {
  pending: false,
  projects: [],
  success: null,
  error: null,
};

export const getAllProjects = createAsyncThunk(
  "project/getAllProjects",
  async (token, thunkAPI) => {
    try {
      const response = await projectAPI.getProjectsList(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjects.pending, (state) => {
        state.pending = true;
      })
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.pending = false;

        state.projects = action.payload.projects;

        state.success = action.payload.success;
      })
      .addCase(getAllProjects.rejected, (state, action) => {
        state.pending = false;

        state.success = action.payload.success;

        state.error = action.error;
      });
  },
});

export const { logoutUser, setPhoneNumber } = projectSlice.actions;
export default projectSlice.reducer;
