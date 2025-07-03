// store/statusSlice.js
import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: {},
  reducers: {
    setFinished: (state, action) => {
      const { examId, value } = action.payload;
      if (!state[examId]) state[examId] = {};
      state[examId].finished = value;
    },
    setSubmitted: (state, action) => {
      const { examId, value } = action.payload;
      if (!state[examId]) state[examId] = {};
      state[examId].submitted = value;
    },
    resetStatus: (state, action) => {
      delete state[action.payload]; // examId
    },
    markSubmitted: (state, action) => {
      const { examId } = action.payload;
      state[examId] = { submitted: true };
    },
  },
});

export const { setFinished, setSubmitted, resetStatus, markSubmitted } =
  statusSlice.actions;
export default statusSlice.reducer;
