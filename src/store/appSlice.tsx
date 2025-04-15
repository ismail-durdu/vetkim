import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface LoginState {
  login: boolean;
}

const initialState: LoginState = {
  login: true,
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
  },
});
export const { logout, login } = appSlice.actions;

export default appSlice.reducer;
