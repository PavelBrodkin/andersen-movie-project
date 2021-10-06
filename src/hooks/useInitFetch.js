import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initApp } from "../store/initSlice";
import { fetchMovies } from "../store/moviesSlice";
import { setMovies } from "../store/moviesSlice";
import { isPersistedState } from "../helpers/storage";

const useInitFetch = () => {
  const { searchTerm } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initApp());
  }, [dispatch]);

  // initial fetch and search
  useEffect(() => {
    console.log("Fetching Movies");
    dispatch(fetchMovies({ searchTerm: searchTerm, page: 1 }));
  }, [dispatch, searchTerm]);
};

export default useInitFetch;
