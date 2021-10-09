import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SEARCH_BASE_URL } from "../../helpers/config";

export const fetchSearchSuggestions = createAsyncThunk(
  "search/fetchSearchSuggestions",
  async (searchTerm, rejectWithValue) => {
    try {
      const endpoint = `${SEARCH_BASE_URL}${searchTerm}&page=1`;
      return await (await fetch(endpoint)).json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    searchBarInput: "",
    suggestions: [],
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSearchBarInput(state, action) {
      state.searchBarInput = action.payload;
    },
    mergeSearchState(state, action) {
      state.searchTerm = action.payload;
      state.searchBarInput = action.payload;
      state.suggestions = [];
    },
    resetSuggestions(state) {
      state.suggestions = [];
    },
  },
  extraReducers: {
    [fetchSearchSuggestions.fulfilled]: (state, { payload: { results } }) => {
      state.suggestions = results ? results.slice(0, 5) : [];
    },
  },
});

export default searchSlice.reducer;
export const {
  setSearchTerm,
  setSearchBarInput,
  mergeSearchState,
  resetSuggestions,
} = searchSlice.actions;
