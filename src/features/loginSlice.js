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
  success: false,
  message: "",
  status: null,
  ...isLoggedIn,
};

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authAPI.login(credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.pending = false;

      state.isAuthenticated = false;

      Cookies.remove("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.pending = false;

        state.isAuthenticated = true;

        state.token = action.payload.accessToken;
        state.success = action.payload.success;
        state.status = action.payload.status;

        // set cookie
        const user = {
          isAuthenticated: true,
          token: action.payload.accessToken,
        };
        Cookies.set("user", JSON.stringify(user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.pending = false;

        state.success = action.payload.success;
        state.message = action.payload.message;
        state.status = action.payload.status;

        // set user
        state.isAuthenticated = false;
        state.token = null;
      });
  },
});

export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
