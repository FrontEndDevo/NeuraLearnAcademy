import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
  name: "topics",
  initialState: [],
  reducers: {
    toggleTopic: (state, action) => {
      const index = state.indexOf(action.payload);
      if (index === -1) {
        // The topic is not in the array, so add it.
        state.push(action.payload);
      } else {
        // The topic is in the array, so remove it.
        state.splice(index, 1);
      }
    },
    resetTopics: () => [],
  },
});

export const { toggleTopic, resetTopics } = topicSlice.actions;
export default topicSlice.reducer;
