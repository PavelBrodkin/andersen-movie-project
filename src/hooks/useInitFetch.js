import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initApp } from "../store/Slices/initSlice";
import { fetchMovies, fetchGenres } from "../store/Slices/moviesSlice";
import { setHistoryOfSearchTerms } from "../store/Slices/authSlice";

const useInitFetch = () => {
  const { searchTerm } = useSelector((state) => state.search);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // initial fetch and search

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchMovies({ searchTerm: searchTerm.trim(), page: 1 }));
      console.log("Fetching Search");
      if (isLoggedIn) {
        dispatch(setHistoryOfSearchTerms(searchTerm.trim()));
        console.log("save search terms");
      }
    } else {
      dispatch(fetchMovies({ searchTerm: "", page: 1 }));
      console.log("Fetching Movies");
    }
  }, [dispatch, searchTerm, isLoggedIn]);

  useEffect(() => {
    console.log("fetch genres");
    dispatch(fetchGenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);
};

export default useInitFetch;
