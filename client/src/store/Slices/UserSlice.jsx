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
      state.user.username =
        action?.payload?.user?.last_name + ' ' + action?.payload?.user?.first_name;
      state.user.email = action?.payload?.user?.email;
      state.user.token = action?.payload?.token;
      state.user.favorites = action?.payload?.user?.favorites;
      localStorage.setItem('token', action?.payload?.token);
    },
    logout: (state) => {
      state.user.username = null;
      state.user.email = null;
      state.user.token = null;
      state.user.favorites = [];
      localStorage.removeItem('token');
    },
    incrementFavorite: (state, action) => {
      state.user.favorites = [...state.user.favorites, action.payload];
    },
    decrementFavorite: (state, action) => {
      // state.user.favorites = [...state.user.favorites, ];
      state.user.favorites = action.payload;
    },
  },
});

export const { login, logout, incrementFavorite, decrementFavorite } = UserSlice.actions;

export default UserSlice.reducer;
