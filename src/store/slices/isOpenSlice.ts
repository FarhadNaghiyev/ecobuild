
import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isOpen: boolean;
}

const initialState: SidebarState = { isOpen: false };

const isOpenSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => { state.isOpen = true; },
    closeSidebar: (state) => { state.isOpen = false; },
    toggleSidebar: (state) => { state.isOpen = !state.isOpen; },
  },
});

export const { openSidebar, closeSidebar, toggleSidebar } = isOpenSlice.actions;
export default isOpenSlice.reducer;
