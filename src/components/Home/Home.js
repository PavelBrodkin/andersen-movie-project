import React from "react";

// Config
import {
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from "../../helpers/config";

// Components
import HeroImage from "../HeroImage/HeroImage";
import SearchBar from "../SearchBar/SearchBar";
import Grid from "../Grid/Grid";
import Thumb from "../Thumb/Thumb";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";

// hooks
import useHomeFetch from "../../hooks/useHomeFetch";

// image
import NoImage from "../../images/no_image.jpg";

const Home = () => {
  const { error, movies, searchTerm, loading, setIsLoadingMore } =
    useHomeFetch();

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {movies?.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[1].backdrop_path}`}
          title={movies.results[1].original_title}
          text={movies.results[1].overview}
        />
      ) : null}
      <SearchBar />
      <Grid header={searchTerm ? "Search result" : "The best for today"}>
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

export default Home;
