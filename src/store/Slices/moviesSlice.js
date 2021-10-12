import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  GENRE_BASE_URL,
} from "../../helpers/config";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ searchTerm, page, genres }, rejectWithValue) => {
    try {
      const endpoint = searchTerm
        ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
        : `${POPULAR_BASE_URL}&page=${page}${
            genres ? `&with_genres=${genres}` : ""
          }`;
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
    advancedSearchQuery: [],
  },
  reducers: {
    setMovies(state, { payload }) {
      state.movies = payload;
    },
    setSearchQuery(state, { payload }) {
      state.advancedSearchQuery.push(payload);
    },
    removeSearchQuery(state, { payload }) {
      state.advancedSearchQuery = state.advancedSearchQuery.filter(
        (query) => query !== payload
      );
    },
    resetSearchQuery(state) {
      state.advancedSearchQuery = [];
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.status = "loading";
      state.error = false;
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      const { page } = payload;
      state.movies = {
        ...payload,
        results:
          page > 1
            ? [...state.movies.results, ...payload.results]
            : [...payload.results],
      };
      state.status = "resolved";
    },
    [fetchMovies.rejected]: (state) => {
      state.status = "rejected";
      state.error = true;
    },
    [fetchGenres.fulfilled]: (state, { payload }) => {
      state.genres = payload.genres.reduce((acc, genre) => {
        acc[genre.id] = genre;
        return acc;
      }, {});
    },
  },
});

export default moviesSlice.reducer;
export const {
  setMovies,
  setSearchQuery,
  removeSearchQuery,
  resetSearchQuery,
} = moviesSlice.actions;
