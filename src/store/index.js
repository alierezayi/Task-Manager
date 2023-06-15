import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";

import loginSlice from "@/features/loginSlice";
import userSlice from "@/features/userSlice";
import sidebarSlice from "@/features/sidebarSlice";
import projectSlice from "@/features/projectSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      login: loginSlice,
      user: userSlice,
      sidebar: sidebarSlice,
      project: projectSlice,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
