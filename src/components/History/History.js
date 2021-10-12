import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { mergeSearchState } from "../../store/Slices/searchSlice";
import {
  setSearchQuery,
  resetSearchQuery,
  fetchMovies,
} from "../../store/Slices/moviesSlice";

// Styles
import { Wrapper } from "./History.style";

// Components
import Grid from "../Grid/Grid";
import CellSearch from "./SearchCell";
import AdvancedSearchCell from "./AdvancedSearchCell";

const History = () => {
  const dispatch = useDispatch();
  const { searchTerms, advancedSearch } = useSelector(
    (state) => state.auth.currentUser
  );

  const onSearchClickHandler = (term) => {
    return () => {
      dispatch(mergeSearchState(term));
    };
  };

  const onAdvancedSearchClickHandler = (genres) => {
    return async () => {
      dispatch(mergeSearchState(""));
      dispatch(resetSearchQuery());
      genres.forEach((genre) => {
        dispatch(setSearchQuery(genre));
      });
      await dispatch(
        fetchMovies({
          searchTerm: "",
          page: 1,
          genres: genres?.join(","),
        })
      );
    };
  };

  return (
    <Wrapper>
      {!searchTerms?.length ? (
        <h1>You haven't searched for anything yet</h1>
      ) : (
        <Grid header={"History of search"} width="100%">
          {searchTerms.map((term) => (
            <CellSearch
              key={term}
              term={term}
              callback={onSearchClickHandler(term)}
            />
          ))}
        </Grid>
      )}
      {advancedSearch?.length ? (
        <Grid header={"History of advanced search"} width="100%">
          {advancedSearch.map((genres) => (
            <AdvancedSearchCell
              key={genres}
              data={genres.split(",")}
              callback={onAdvancedSearchClickHandler(genres.split(","))}
            />
          ))}
        </Grid>
      ) : null}
    </Wrapper>
  );
};

export default History;
