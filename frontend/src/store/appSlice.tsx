import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface LoginState {
  login: boolean;
  edit: boolean;
}

const initialState: LoginState = {
  login: true,
  edit: false,
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    logout: (state) => {
      state.login = false;
    },
    login: (state) => {
      state.login = true;
    },
    openTheEditMode: (state) => {
      state.edit = true;
    },
    closeTheEditMode: (state) => {
      state.edit = false;
    },
  },
});
export const { logout, login, openTheEditMode, closeTheEditMode } =
  appSlice.actions;

export default appSlice.reducer;
