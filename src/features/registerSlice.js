import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "../services/authAPI";

const initialState = {
  pending: false,
  success: false,
  message: "",
  status: null,
};

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = await authAPI.register(userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.pending = false;

        state.success = action.payload.success;
        state.message = action.payload.message;
        state.status = action.payload.status;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.pending = false;

        state.success = action.payload.success;
        state.message = action.payload.message;
        state.status = action.payload.status;
      });
  },
});

// export const {} = authSlice.actions;
export default registerSlice.reducer;
