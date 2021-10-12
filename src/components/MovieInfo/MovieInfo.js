import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Thumb from "../Thumb/Thumb";
import { Wrapper, Content, Text } from "./MovieInfo.style";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../helpers/config";
import NoImage from "../../images/no_image.jpg";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { setFavorites, removeFavorites } from "../../store/Slices/authSlice";

const MovieInfo = ({ movie, directors }) => {
  const [isFavorite, setFavorite] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const favorites = useSelector((state) => state.auth.currentUser.favorites);
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    setFavorite((prev) => !prev);
    !isFavorite
      ? dispatch(
          setFavorites({ id: movie.id, image: movie.poster_path || NoImage })
        )
      : dispatch(removeFavorites({ id: movie.id }));
  };

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    if (favorites[movie?.id]) {
      setFavorite(true);
    }
  }, [favorites, movie?.id, isLoggedIn]);

  return (
    <Wrapper backdrop={movie?.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie?.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="movie-thumb"
        />
        <Text>
          <h1>{movie?.title}</h1>
          <h3>PLOT</h3>
          <p>{movie?.overview}</p>
          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie?.vote_average}</div>
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
              favoriteStatus={isFavorite}
              callback={toggleFavorite}
            />
          ) : null}
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
