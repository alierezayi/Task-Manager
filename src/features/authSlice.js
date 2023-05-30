import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "../services/authAPI";

import Cookies from "js-cookie";

const isLoggedIn = Cookies.get("user")
  ? JSON.parse(Cookies.get("user"))
  : {
      isAuthenticated: false,
      token: null,
    };

const initialState = {
  pending: false,
  response: {
    register: {},
    otp: {},
    login: {},
  },
  ...isLoggedIn,
};

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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.pending = false;

      state.isAuthenticated = false;

      Cookies.remove("user");
    },
    setPhoneNumber: (state, action) => {
      state.PhoneNumber = action.payload;
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

        state.response.register = action.payload;
        state.response.otp = {};
        state.response.login = {};

        // set user
        state.isAuthenticated = false;
        state.token = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.pending = false;

        state.response.register = action.payload;
        state.response.otp = {};
        state.response.login = {};

        // set user
        state.isAuthenticated = false;
        state.token = null;
      })

      // otp case
      .addCase(checkOtpUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(checkOtpUser.fulfilled, (state, action) => {
        state.pending = false;

        state.response.otp = action.payload;
        state.response.register = {};
        state.response.login = {};

        // set user
        state.isAuthenticated = false;
        state.token = null;
      })
      .addCase(checkOtpUser.rejected, (state, action) => {
        state.pending = false;

        state.response.otp = action.payload;
        state.response.register = {};
        state.response.login = {};

        // set user
        state.isAuthenticated = false;
        state.token = null;
      })

      // login case
      .addCase(loginUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.pending = false;

        // set user
        state.isAuthenticated = true;
        state.token = action.payload.accessToken;

        state.response.login = action.payload;
        state.response.register = {};
        state.response.otp = {};

        // set cookie
        const user = {
          isAuthenticated: true,
          token: action.payload.accessToken,
        };
        Cookies.set("user", JSON.stringify(user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.pending = false;

        state.response.login = action.payload;
        state.response.register = {};
        state.response.otp = {};

        // set user
        state.isAuthenticated = false;
        state.token = null;
      });
  },
});

export const { logoutUser, setPhoneNumber } = authSlice.actions;
export default authSlice.reducer;
