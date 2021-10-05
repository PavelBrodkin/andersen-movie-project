import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    currentUser: {},
    users: {},
  },
  reducers: {
    initUsers: (state, { payload }) => {
      state.users = payload;
    },
    signup: (state, { payload }) => {
      state.users[payload.email] = payload;
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
  },
});

export default authSlice.reducer;
export const { initUser, initUsers, signup, signin, logout } =
  authSlice.actions;
