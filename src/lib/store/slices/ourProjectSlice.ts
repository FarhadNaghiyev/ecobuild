// src/features/ourProjects/ourProjectsSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface OurProjectsState {
  activeIndex: number;
}

const initialState: OurProjectsState = {
  activeIndex: 0,
};

const ourProjectsSlice = createSlice({
  name: "ourProjects",
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload;
    },
  },
});

export const { setActiveIndex } = ourProjectsSlice.actions;
export default ourProjectsSlice.reducer;
