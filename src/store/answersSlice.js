// store/answersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const answersSlice = createSlice({
  name: "answers",
  initialState: {},
  reducers: {
    setAnswer: (state, action) => {
      const { examId, questionId, answerId } = action.payload;
      if (!state[examId]) state[examId] = {};
      state[examId][questionId] = answerId;
    },
    clearAnswer: (state, action) => {
      const { examId, questionId } = action.payload;
      if (state[examId]) delete state[examId][questionId];
    },
  },
});

export const { setAnswer, clearAnswer } = answersSlice.actions;
export default answersSlice.reducer;
