import React from "react";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../helpers/config";

// Components
import SearchBar from "../SearchBar/SearchBar";
import Grid from "../Grid/Grid";
import Thumb from "../Thumb/Thumb";
import { Spinner } from "../Spinner/Spinner.style";
import Button from "../Button/Button";
import NoImage from "../../images/no_image.jpg";

// Hooks
import useHomeFetch from "../../hooks/useHomeFetch";

const SearchPage = () => {
  const { error, movies, searchTerm, loading, setIsLoadingMore } =
    useHomeFetch();

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <SearchBar />
      <Grid header={searchTerm ? "Search result" : "Most popular movies"}>
        {movies?.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable={true}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieid={movie.id}
          />
        ))}
      </Grid>
      {loading ? <Spinner /> : null}
      {movies?.page < movies.total_pages && !loading ? (
        <Button text="Load more" callback={() => setIsLoadingMore(true)} />
      ) : null}
    </>
  );
};

export default SearchPage;
