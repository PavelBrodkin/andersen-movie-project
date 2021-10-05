import React, { useState } from "react";
import { useSelector } from "react-redux";
import Thumb from "../Thumb/Thumb";
import { Wrapper, Content, Text } from "./MovieInfo.style";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../helpers/config";
import NoImage from "../../images/no_image.jpg";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const MovieInfo = ({ movie, directors }) => {
  const [favorite, setFavorite] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const toggleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <Wrapper backdrop={movie && movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie && movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="movie-thumb"
        />
        <Text>
          <h1>{movie && movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie && movie.overview}</p>
          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie && movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>Director{directors.length > 1 ? "s" : ""}</h3>
              {directors.map((el) => {
                return <p key={el.credit_id}>{el.name}</p>;
              })}
            </div>
          </div>
          {isLoggedIn ? (
            <FavoriteButton
              favoriteStatus={favorite}
              callback={toggleFavorite}
            />
          ) : null}
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
