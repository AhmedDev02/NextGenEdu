// store/timersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const timersSlice = createSlice({
  name: "timers",
  initialState: {},
  reducers: {
    setEndTime: (state, action) => {
      const { examId, endTime } = action.payload;
      state[examId] = { endTime };
    },
    clearTimer: (state, action) => {
      delete state[action.payload]; // examId
    },
  },
});

export const { setEndTime, clearTimer } = timersSlice.actions;
export default timersSlice.reducer;
