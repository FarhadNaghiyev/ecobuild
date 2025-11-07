// src/features/ourJobs/ourJobsSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface OurJobsState {
  activeIndex: number;
}

const initialState: OurJobsState = {
  activeIndex: 0,
};

const ourJobsSlice = createSlice({
  name: "ourJobs",
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload;
    },
  },
});

export const { setActiveIndex } = ourJobsSlice.actions;
export default ourJobsSlice.reducer;
