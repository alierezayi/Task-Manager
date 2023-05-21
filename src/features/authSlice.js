import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "../services/authAPI";

import Cookies from "js-cookie";

const user = Cookies.get("user")
  ? JSON.parse(Cookies.get("user"))
  : {
      isAuthenticated: false,
      token: null,
    };

// Define initial state for authSlice
const initialState = {
  pending: false,
  user,
};

// Define async thunk to handle login process
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authAPI.login(credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Define async thunk to handle register process
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await authAPI.register(userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Define async thunk to handle check OTP process
export const checkOtpUser = createAsyncThunk(
  "auth/checkOtp",
  async (otp, thunkAPI) => {
    try {
      const response = await authAPI.checkOtp(otp);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Define authSlice using createSlice function
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.pending = false;

      Cookies.remove("user");
    },
  },
  extraReducers: (builder) => {
    builder

      // register case
      .addCase(registerUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.pending = false;

        // set user
        state.user = { isAuthenticated: false, token: null };
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.pending = false;

        // set user
        state.user = { isAuthenticated: false, token: null };
      })

      // otp case
      .addCase(checkOtpUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(checkOtpUser.fulfilled, (state, action) => {
        state.pending = false;

        // set user
        state.user = { isAuthenticated: false, token: null };
      })
      .addCase(checkOtpUser.rejected, (state, action) => {
        state.pending = false;

        // set user
        state.user = { isAuthenticated: false, token: null };
      })

      // login case
      .addCase(loginUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.pending = false;

        // set user
        const user = {
          isAuthenticated: true,
          token: action.payload.accessToken,
        };
        state.user = user;

        // set cookie
        Cookies.set("user", JSON.stringify(user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.pending = false;

        // set user
        state.user = { isAuthenticated: false, token: null };
      });
  },
});

// Export actions and reducer
export const { setUser, setToken, logoutUser } = authSlice.actions;
export default authSlice.reducer;
