import { configureStore } from "@reduxjs/toolkit";
import initReducer from "./initSlice";
import moviesReducer from "./moviesSlice";
import movieReducer from "./movieSlice";
import authReducer from "./authSlice";
import authMiddleware from "./authMiddleware";

export const store = configureStore({
  reducer: {
    init: initReducer,
    movies: moviesReducer,
    movie: movieReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});
