import { configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "./sideBarSlice";
import filterReducer from "./filterSlice";
import authReducer from "./authSlice";
import answersReducer from "./answersSlice"; // ✅ your new slice
import timersReducer from "./timersSlice"; // ✅ optional timer slice
import statusReducer from "./statusSlice"; // ✅ optional exam status

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    filter: filterReducer,
    auth: authReducer,
    answers: answersReducer,
    timers: timersReducer,
    status: statusReducer,
  },
});
