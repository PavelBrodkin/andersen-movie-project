import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initApp } from "../store/Slices/initSlice";
import { fetchMovies, fetchGenres } from "../store/Slices/moviesSlice";
import { setHistoryOfSearchTerms } from "../store/Slices/authSlice";

const useInitFetch = () => {
  const { searchTerm } = useSelector((state) => state.search);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // search fetch

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchMovies({ searchTerm: searchTerm.trim(), page: 1 }));
      if (isLoggedIn) {
        dispatch(setHistoryOfSearchTerms(searchTerm.trim()));
      }
    }
  }, [dispatch, searchTerm, isLoggedIn]);

  // initial fetch

  useEffect(() => {
    dispatch(initApp());
    dispatch(fetchGenres());
    dispatch(fetchMovies({ searchTerm: "", page: 1 }));
  }, [dispatch]);
};

export default useInitFetch;
