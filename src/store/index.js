import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";

import authSlice from "@/features/authSlice";
import userSlice from "@/features/userSlice";
import sidebarSlice from "@/features/sidebarSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authSlice,
      user: userSlice,
      sidebar: sidebarSlice,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
