import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: null,
    login: null,
    token: null,
  },
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.user.name = "Альберт Микаелян";
      state.user.login = "Ddyadz";
      state.user.token = "ssdadadadadad";
    },
    logout: (state) => {
      state.user.name = null;
      state.user.login = null;
      state.user.token = null;
    },
  },
});

export const { login, logout } = UserSlice.actions;

export default UserSlice.reducer;
