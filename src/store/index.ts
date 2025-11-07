import { configureStore } from "@reduxjs/toolkit";
import isOpenReducer from "./slices/isOpenSlice";
import ourJobReducer from "./slices/ourJobSlice";

export const store = configureStore({
  reducer: { 
    sidebar: isOpenReducer,
    ourJobs: ourJobReducer,
  },
  
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
