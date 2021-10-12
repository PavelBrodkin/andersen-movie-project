import { storage } from "../../helpers/storage";
import { initApp } from "../Slices/initSlice";
import {
  initUsers,
  initUser,
  signup,
  signin,
  logout,
  setFavorites,
  removeFavorites,
  setHistoryOfSearchTerms,
  setHistoryOfAdvancedSearch,
} from "../Slices/authSlice";

const authMiddleware = (store) => (next) => (action) => {
  // Выполняем следующий стейт перед изменением local storage
  next(action);

  if (initApp.match(action)) {
    const users = storage("users") || {};
    store.dispatch(initUsers(users));
    const currentUser = storage("currentUser");
    if (currentUser?.email) {
      store.dispatch(initUser(currentUser));
    }
  }
  if (signup.match(action)) {
    const users = store.getState().auth.users;
    storage("users", users);
  }
  if (signin.match(action)) {
    const currentUser = store.getState().auth.currentUser;
    storage("currentUser", currentUser);
  }
  if (logout.match(action)) {
    storage("currentUser", {});
    window.location.reload();
  }
  if (
    setFavorites.match(action) ||
    removeFavorites.match(action) ||
    setHistoryOfSearchTerms.match(action) ||
    setHistoryOfAdvancedSearch.match(action)
  ) {
    const currentUser = store.getState().auth.currentUser;
    const users = store.getState().auth.users;
    storage("currentUser", currentUser);
    storage("users", users);
  }
};

export default authMiddleware;
