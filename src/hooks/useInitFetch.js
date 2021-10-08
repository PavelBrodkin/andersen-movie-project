import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initApp } from "../store/initSlice";
import { fetchMovies } from "../store/moviesSlice";
import { setSearchTerms } from "../store/authSlice";

const useInitFetch = () => {
  const { searchTerm } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  // initial fetch and search
  useEffect(() => {

    let timer;
    if (searchTerm) {
      timer = setTimeout(() => {
        dispatch(fetchMovies({ searchTerm: searchTerm.trim(), page: 1 }));
        dispatch(setSearchTerms(searchTerm.trim()));
        console.log("Fetching Search");
      }, 1000);
    } else {
      dispatch(fetchMovies({ searchTerm: "", page: 1 }));
      console.log("Fetching Movies");
    }
    return () => clearTimeout(timer);
  }, [dispatch, searchTerm]);

  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);
};

export default useInitFetch;
