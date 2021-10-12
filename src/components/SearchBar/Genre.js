import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GenreItem } from "./AdvancedSearch.style";
import {
  setSearchQuery,
  removeSearchQuery,
} from "../../store/Slices/moviesSlice";

function Genre({ data, children }) {
  const { advancedSearchQuery } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [state, setState] = useState(false);

  const onGenreClickHandler = ({ target: { dataset } }) => {
    const id = dataset.id;
    setState((prev) => !prev);
    advancedSearchQuery.includes(id)
      ? dispatch(removeSearchQuery(id))
      : dispatch(setSearchQuery(id));
  };

  useEffect(() => {
    if (advancedSearchQuery.includes(data.toString())) {
      setState(true);
    }
  }, [advancedSearchQuery, data]);

  return (
    <GenreItem styleProps={state} data-id={data} onClick={onGenreClickHandler}>
      {children}
    </GenreItem>
  );
}

export default Genre;
