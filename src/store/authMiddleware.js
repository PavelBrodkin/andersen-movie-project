import { storage } from "../helpers/storage";
import { initApp } from "./initSlice";
import { initUsers, signup, signin, logout } from "./authSlice";

const authMiddleware = (store) => (next) => (action) => {
  // Выполняем следующий стейт перед изменением local storage
  next(action);

  if (initApp.match(action)) {
    const users = storage("users") || {};
    store.dispatch(initUsers(users));
    const currentUser = storage("currentUser");
    if (currentUser.email) {
      store.dispatch(signin(currentUser));
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
  }
};

export default authMiddleware;
