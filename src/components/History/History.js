import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mergeSearchState, resetSuggestions } from "../../store/Slices/searchSlice";
import { useHistory } from "react-router";

// Styles
import { Wrapper } from "./History.style";

// Components
import Grid from "../Grid/Grid";
import CellSearch from "./cellSearch";

const History = () => {

  const searchTerms = useSelector(
    (state) => state.auth.currentUser.searchTerms
  );
  const { suggestions } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const onClickHandler = (term) => {
    return () => {
      dispatch(mergeSearchState(term));
    };
  };



  return (
    <Wrapper>
      <Grid header={"History of search"} width="100%">
        {searchTerms?.map((term) => (
          <CellSearch key={term} term={term} callback={onClickHandler(term)} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default History;
