import { createSlice } from "@reduxjs/toolkit";

const topicSlice = createSlice({
  name: "topic",
  initialState: "",
  reducers: {
    setTopic: (state, action) => action.payload,
    resetTopic: () => "",
  },
});

export const { setTopic, resetTopic } = topicSlice.actions;
export default topicSlice.reducer;
