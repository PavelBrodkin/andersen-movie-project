import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchMovies } from "../store/moviesSlice";

const useHomeFetch = () => {
  const dispatch = useDispatch();
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { movies, status, error, searchTerm } = useSelector(
    (state) => state.movies
  );
  const loading = status === "loading";

  useEffect(() => {
    if (!isLoadingMore) {
      return;
    }
    console.log("Fetching more + page");
    dispatch(fetchMovies({ searchTerm: searchTerm, page: movies.page + 1 }));
    setIsLoadingMore(false);
  }, [dispatch, isLoadingMore, searchTerm, movies.page]);

  return {
    error,
    movies,
    searchTerm,
    loading,
    setIsLoadingMore,
  };
};

export default useHomeFetch;
