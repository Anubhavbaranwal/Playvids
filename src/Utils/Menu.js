import { createSlice } from "@reduxjs/toolkit";

const Menu = createSlice({
  name: "Menu",
  initialState: {
    isMEnuOpen: "True",
  },
  reducers: {
    toogleMenu: (state) => {
      state.isMEnuOpen = !state.isMEnuOpen;
    },
    closeMenu: (state) => {
      state.isMEnuOpen = false;
    },
  },
});

export const { toogleMenu, closeMenu } = Menu.actions;
export default Menu.reducer;
