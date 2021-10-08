import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Image
import searhIcon from "../../images/search-icon.svg";

// styles
import { Wrapper, Content } from "./SearchBar.style";

// BLL
import { inputSearch } from "../../store/moviesSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.movies.searchTerm);

  function onChangeHandler(event) {
    dispatch(inputSearch(event.target.value));
  }

  return (
    <Wrapper>
      <Content>
        <img src={searhIcon} alt="seacrh-icon" />
        <input
          type="text"
          placeholder="Search movie"
          onChange={onChangeHandler}
          value={searchTerm}
          autoComplete="false"
        />
      </Content>
      e
    </Wrapper>
  );
};

export default SearchBar;
