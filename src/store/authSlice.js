import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Persist login
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // stored in memory (Redux)
    },
    logout: (state) => {
      console.log(state.user);

      state.user = null;
      console.log(state.user);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
