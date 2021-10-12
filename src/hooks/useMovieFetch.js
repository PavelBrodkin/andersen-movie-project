import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovie } from "../store/Slices/movieSlice";

const useMovieFetch = (movieId) => {
  const dispatch = useDispatch();
  const { movie, actors, directors, status, error } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(fetchMovie(movieId));
  }, [dispatch, movieId]);

  return {
    movie,
    actors,
    directors,
    status,
    error,
  };
};

export default useMovieFetch;
