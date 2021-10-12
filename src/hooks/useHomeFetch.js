import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchMovies } from "../store/Slices/moviesSlice";

const useHomeFetch = () => {
  const dispatch = useDispatch();
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { advancedSearchQuery } = useSelector((state) => state.movies);
  const { movies, status, error } = useSelector((state) => state.movies);
  const { searchTerm } = useSelector((state) => state.search);
  const loading = status === "loading";

  useEffect(() => {
    if (!isLoadingMore) {
      return;
    }
    dispatch(
      fetchMovies({
        searchTerm: searchTerm,
        page: movies.page + 1,
        genres: advancedSearchQuery?.join(","),
      })
    );
    setIsLoadingMore(false);
  }, [dispatch, isLoadingMore, searchTerm, movies.page, advancedSearchQuery]);

  return {
    error,
    movies,
    searchTerm,
    loading,
    setIsLoadingMore,
  };
};

export default useHomeFetch;
