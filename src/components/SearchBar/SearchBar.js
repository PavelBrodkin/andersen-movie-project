import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// Image
import searhIcon from "../../images/search-icon.svg";

// styles
import { Wrapper, Content } from "./SearchBar.style";

// Test
import { inputSearch } from "../../store/moviesSlice";

const SearchBar = () => {
  const [state, setState] = useState("");
  const initial = useRef(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      dispatch(inputSearch(state));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch, state]);

  function onChangeHandler(event) {
    return setState(event.target.value);
  }

  return (
    <Wrapper>
      <Content>
        <img src={searhIcon} alt="seacrh-icon" />
        <input
          type="text"
          placeholder="Search movie"
          onChange={onChangeHandler}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
