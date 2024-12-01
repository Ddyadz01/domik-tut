import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    username: null,
    email: null,
    token: null,
    favorites: [],
  },
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user.username = action.payload.user.last_name + ' ' + action.payload.user.first_name;
      state.user.email = action.payload.user.email;
      state.user.token = action.payload.token;
      state.user.favorites = action.payload.user.favorites;
    },
    logout: (state) => {
      state.user.username = null;
      state.user.login = null;
      state.user.token = null;
      state.user.favorites = null;
    },
  },
});

export const { login, logout } = UserSlice.actions;

export default UserSlice.reducer;
