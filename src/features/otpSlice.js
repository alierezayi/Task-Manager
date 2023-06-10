import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "../services/authAPI";

const initialState = {
  pending: false,
  success: false,
  message: "",
  status: null,
};

export const checkOtpUser = createAsyncThunk(
  "otp/checkOtp",
  async (otp, thunkAPI) => {
    try {
      const response = await authAPI.checkOtp(otp);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkOtpUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(checkOtpUser.fulfilled, (state, action) => {
        state.pending = false;

        state.success = action.payload.success;
        state.message = action.payload.message;
        state.status = action.payload.status;
      })
      .addCase(checkOtpUser.rejected, (state, action) => {
        state.pending = false;

        state.success = action.payload.success;
        state.message = action.payload.message;
        state.status = action.payload.status;
      });
  },
});

// export const {} = otpSlice.actions;
export default otpSlice.reducer;
