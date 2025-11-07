import { configureStore } from "@reduxjs/toolkit";
import isOpenReducer from "./slices/isOpenSlice";
import ourProjectReducer from "./slices/ourProjectSlice";

export const store = configureStore({
  reducer: { 
    sidebar: isOpenReducer,
    ourProjects: ourProjectReducer,
  },
  
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
