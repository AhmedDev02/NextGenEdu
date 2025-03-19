import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarState: (state, action) => {
      state.isSidebarOpen = action.payload; // Set the sidebar state explicitly.
    },
  },
});
export const { toggleSidebar, setSidebarState } = sidebarSlice.actions;
export default sidebarSlice.reducer;
