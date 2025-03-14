import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sideBarSlice";
import filterReducer from "./filterSlice";
import authReducer from "./authSlice";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
