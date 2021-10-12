import { configureStore } from "@reduxjs/toolkit";
import initReducer from "./Slices/initSlice";
import moviesReducer from "./Slices/moviesSlice";
import movieReducer from "./Slices/movieSlice";
import authReducer from "./Slices/authSlice";
import authMiddleware from "./Middleware/authMiddleware";
import searchReducer from "./Slices/searchSlice";

export const store = configureStore({
  reducer: {
    init: initReducer,
    movies: moviesReducer,
    movie: movieReducer,
    auth: authReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});
