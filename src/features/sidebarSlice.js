import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  minimize: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.minimize = false;
      state.sidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },
    toggleMinimize: (state) => {
      state.minimize = !state.minimize;
    },
  },
});

export const { openSidebar, closeSidebar, toggleMinimize } =
  sidebarSlice.actions;
export default sidebarSlice.reducer;
