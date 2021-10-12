import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchMovies } from "../../store/Slices/moviesSlice";

// Styles
import { Wrapper, GenreWrapper, ButtonsWrapper } from "./AdvancedSearch.style";

// Components
import Genre from "./Genre";
import Button from "../Button/Button";

// BLL
import { mergeSearchState } from "../../store/Slices/searchSlice";
import { setHistoryOfAdvancedSearch } from "../../store/Slices/authSlice";

const AdvancedSearch = ({ AdvancedSearchCloseHandler }) => {
  const { genres, advancedSearchQuery } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSearchBtnHandler = async () => {
    history.push("/search");
    AdvancedSearchCloseHandler(false);
    dispatch(mergeSearchState(""));
    dispatch(setHistoryOfAdvancedSearch(advancedSearchQuery.join(",")));

    await dispatch(
      fetchMovies({
        searchTerm: "",
        page: 1,
        genres: advancedSearchQuery?.join(","),
      })
    );
  };

  return (
    <Wrapper>
      <h2>Select genres</h2>
      <GenreWrapper>
        {Object.values(genres).map((genre) => (
          <Genre data={genre.id} key={genre.id}>
            {genre.name}
          </Genre>
        ))}
      </GenreWrapper>
      <ButtonsWrapper>
        <Button callback={onSearchBtnHandler} text="Search" />
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default AdvancedSearch;
