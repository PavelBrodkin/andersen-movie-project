import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

// Image
import searhIcon from "../../images/search-icon.svg";

// styles
import {
  Wrapper,
  Content,
  SuggestWrapper,
  SuggestItem,
} from "./SearchBar.style";

// BLL
import {
  setSearchTerm,
  setSearchBarInput,
  resetSuggestions,
} from "../../store/Slices/searchSlice";
import { fetchSearchSuggestions } from "../../store/Slices/searchSlice";

const SearchBar = () => {
  const initial = useRef(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const { searchBarInput, suggestions } = useSelector((state) => state.search);

  // не забыть разобраться с срабатываеинм fetchSearchSuggestions и setHistoryOfSearchTerms когда это не надо

  const onChangeHandler = ({ target }) => {
    dispatch(setSearchBarInput(target.value));
    if (target.value === "") {
      dispatch(resetSuggestions());
    }
  };

  const onKeyDownHandler = ({ code }) => {
    if (code === "Enter") {
      dispatch(setSearchTerm(searchBarInput.trim()));
      history.push("/search");
    }
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
    <Wrapper>
      <Content>
        <img src={searhIcon} alt="seacrh-icon" />
        <input
          type="text"
          placeholder="Search movie"
          onChange={onChangeHandler}
          value={searchBarInput}
          onKeyDown={onKeyDownHandler}
          autoComplete="false"
        />
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
  );
};

export default SearchBar;
