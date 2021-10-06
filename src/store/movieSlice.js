import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, API_KEY } from "../helpers/config";

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async (movieId, { rejectWithValue }) => {
    try {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const movie = await (await fetch(endpoint)).json();
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const credits = await (await fetch(creditsEndpoint)).json();
      return { movie, credits };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: null,
    actors: null,
    directors: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchMovie.pending]: (state) => {
      state.status = "loading";
      state.error = false;
    },
    [fetchMovie.fulfilled]: (state, { payload }) => {
      state.movie = payload.movie;
      state.actors = payload.credits.cast;
      state.directors = payload.credits.crew.filter(
        (member) => member.job === "Director"
      );
      state.status = "resolved";
      state.error = false;
    },
    [fetchMovie.rejected]: (state) => {
      state.status = "rejected";
      state.error = true;
    },
  },
});

export default movieSlice.reducer;
