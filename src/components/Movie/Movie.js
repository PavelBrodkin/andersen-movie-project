import React from "react";
import { useParams } from "react-router-dom";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../helpers/config";

// Components
import Grid from "../Grid/Grid";
import Spinner from "../Spinner/Spinner";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import MovieInfo from "../MovieInfo/MovieInfo";
import MovieInfoBar from "../MovieInfoBar/MovieInfoBar";
import Actor from "../Actor/Actor";

// Hooks
import useMovieFetch from "../../hooks/useMovieFetch";

// Image
import NoImage from "../../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { movie, actors, directors, status, error } = useMovieFetch(movieId);

  if (status === "loading") {
    return <Spinner />;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <BreadCrumb movieTitle={movie?.original_title} />
      <MovieInfo movie={movie} directors={directors} />
      <MovieInfoBar
        time={movie?.runtime}
        budget={movie?.budget}
        revenue={movie?.revenue}
      />
      <Grid header="Actors">
        {actors?.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
