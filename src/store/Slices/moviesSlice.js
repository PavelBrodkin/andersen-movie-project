import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  GENRE_BASE_URL,
} from "../../helpers/config";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ searchTerm, page }, rejectWithValue) => {
    try {
      const endpoint = searchTerm
        ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
        : `${POPULAR_BASE_URL}&page=${page}`;
      return await (await fetch(endpoint)).json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchGenres = createAsyncThunk(
  "movies/fetchGenre",
  async (_, rejectWithValue) => {
    try {
      const endpoint = GENRE_BASE_URL;
      return await (await fetch(endpoint)).json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {
      page: null,
      results: [],
      total_pages: null,
      total_results: null,
    },
    status: null,
    genres: null,
    error: null,
    searchTerm: "",
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.status = "loading";
      state.error = false;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      const { page } = action.payload;
      state.movies = {
        ...action.payload,
        results:
          page > 1
            ? [...state.movies.results, ...action.payload.results]
            : [...action.payload.results],
      };
      state.status = "resolved";
    },
    [fetchMovies.rejected]: (state) => {
      state.status = "rejected";
      state.error = true;
    },
    [fetchGenres.fulfilled]: (state, { payload }) => {
      state.genres = payload.genres;
    },
  },
});

export default moviesSlice.reducer;
export const { setMovies } = moviesSlice.actions;
