import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

// Image
import searсhIcon from "../../images/search-icon.svg";

// styles
import {
  Wrapper,
  Content,
  SuggestWrapper,
  SuggestItem,
  AdvancedSearchToggle,
} from "./SearchBar.style";

// Components
import AdvancedSearch from "./AdvancedSearch";

// BLL
import {
  setSearchTerm,
  setSearchBarInput,
  resetSuggestions,
  fetchSearchSuggestions,
} from "../../store/Slices/searchSlice";

import { resetSearchQuery } from "../../store/Slices/moviesSlice";

const SearchBar = () => {
  const initial = useRef(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const { searchBarInput, suggestions } = useSelector((state) => state.search);
  const [state, setState] = useState(false);

  const onChangeHandler = ({ target }) => {
    setState(false);
    dispatch(setSearchBarInput(target.value));
    if (target.value === "") {
      dispatch(resetSuggestions());
    }
  };

  const onKeyDownHandler = ({ code }) => {
    if (code === "Enter") {
      dispatch(resetSuggestions());
      dispatch(resetSearchQuery());
      dispatch(setSearchTerm(searchBarInput.trim()));
      history.push("/search");
    }
  };

  const AdvancedSearchClickHandler = () => {
    setState((prev) => !prev);
  };

  useEffect(() => {
    if (initial.current) {
      dispatch(resetSuggestions());
      initial.current = false;
      return;
    }
    if (!searchBarInput || !searchBarInput.trim()) {
      return;
    }
    const timer = setTimeout(() => {
      dispatch(fetchSearchSuggestions(searchBarInput));
    }, 500);
    return () => clearTimeout(timer);
  }, [searchBarInput, dispatch]);

  return (
    <>
      <Wrapper>
        <Content>
          <img src={searсhIcon} alt="seacrh-icon" />
          <input
            type="text"
            placeholder="Search movie"
            onChange={onChangeHandler}
            value={searchBarInput}
            onKeyDown={onKeyDownHandler}
            autoComplete="false"
          />
          <AdvancedSearchToggle
            styleProps={state}
            onClick={AdvancedSearchClickHandler}
          >
            Advanced Search
          </AdvancedSearchToggle>
          {suggestions?.length ? (
            <SuggestWrapper>
              {suggestions.map((suggest) => (
                <Link to={`/movie/${suggest.id}`}>
                  <SuggestItem key={suggest.id}>
                    {suggest.original_title}
                  </SuggestItem>
                </Link>
              ))}
            </SuggestWrapper>
          ) : null}
        </Content>
      </Wrapper>
      {state ? <AdvancedSearch AdvancedSearchCloseHandler={setState} /> : null}
    </>
  );
};

export default SearchBar;
