import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    filter: filterReducer,
  },
});
