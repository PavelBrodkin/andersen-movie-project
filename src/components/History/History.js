import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputSearch } from "../../store/moviesSlice";

// Styles
import { Wrapper } from "./History.style";

// Components
import Grid from "../Grid/Grid";
import CellSearch from "./cellSearch";

const History = () => {
  const searchTerms = useSelector(
    (state) => state.auth.currentUser.searchTerms
  );
  const dispatch = useDispatch();

  const onClickHandler = (term) => {
    return () => dispatch(inputSearch(term));
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
