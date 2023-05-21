import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      auth: authSlice,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
