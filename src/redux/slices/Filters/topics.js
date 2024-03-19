import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
  name: "topics",
  initialState: [],
  reducers: {
    addTopic: (state, action) => {
      state.push(action.payload);
    },
    removeTopic: (state, action) => {
      return state.filter((topic) => topic !== action.payload);
    },
    resetTopics: () => [],
  },
});

export const { addTopic, removeTopic, resetTopics } = topicSlice.actions;
export default topicSlice.reducer;
