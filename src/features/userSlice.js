import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import userAPI from "@/services/userAPI";

const initialState = {
  pending: false,
  user: {},
  error: {},
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (token, { rejectWithValue }) => {
    try {
      const response = await userAPI.fetchUser(token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
// export const setProfileImage = createAsyncThunk(
//   "user/setProfileImage",
//   async (token, image, { rejectWithValue }) => {
//     try {
//       const response = await userAPI.setProfileImage(token, image);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.pending = false;

        state.user = action.payload.user;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.pending = false;

        state.error = action.error;
      })
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
