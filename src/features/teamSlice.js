import teamAPI from "@/services/teamApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  pending: false,
  Teams: [],
};

export const getAllTeams = createAsyncThunk(
  "team/getAllTeams",
  async (token, thunkAPI) => {
    try {
      const response = await teamAPI.getTeamsList(token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTeams.pending, (state) => {
        state.pending = true;
      })
      .addCase(getAllTeams.fulfilled, (state, action) => {
        state.pending = false;

        state.projects = action.payload.projects;

        state.success = action.payload.success;
      })
      .addCase(getAllTeams.rejected, (state, action) => {
        state.pending = false;

        state.success = action.payload.success;

        state.error = action.error;
      });
  },
});

export const { logoutUser, setPhoneNumber } = teamSlice.actions;
export default teamSlice.reducer;
