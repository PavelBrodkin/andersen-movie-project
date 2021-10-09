import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    currentUser: { favorites: {}, searchTerms: [] },
    users: {},
  },
  reducers: {
    initUsers: (state, { payload }) => {
      state.users = payload;
    },
    initUser: (state, { payload }) => {
      state.currentUser = payload;
      state.isLoggedIn = true;
    },
    signup: (state, { payload }) => {
      state.users[payload.email] = {
        ...payload,
        favorites: {},
        searchTerms: [],
      };
    },
    signin: (state, { payload }) => {
      const user = state.users[payload.email];
      state.isLoggedIn = true;
      state.currentUser = user;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = {};
    },
    setFavorites: ({ currentUser, users }, { payload }) => {
      currentUser.favorites[payload.id] = payload;
      users[currentUser.email] = currentUser;
    },
    removeFavorites: ({ currentUser, users }, { payload }) => {
      delete currentUser.favorites[payload.id];
      users[currentUser.email] = currentUser;
    },
    setHistoryOfSearchTerms: ({ currentUser, users }, { payload }) => {
      if (payload !== "" && !currentUser.searchTerms.includes(payload)) {
        currentUser.searchTerms.push(payload);
        users[currentUser.email] = currentUser;
      }
    },
  },
});
export default authSlice.reducer;
export const {
  initUser,
  initUsers,
  signup,
  signin,
  logout,
  setFavorites,
  removeFavorites,
  setHistoryOfSearchTerms,
} = authSlice.actions;
