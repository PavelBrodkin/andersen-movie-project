import React from "react";
import { Wrapper, Favorite } from "../FavoriteButton/FavoriteButton.style";

const FavoriteButton = ({ favoriteStatus, callback }) => {
  return (
    <Wrapper onClick={callback}>
      <div>{`${favoriteStatus ? "Remove from" : "Add add"} favorites`}</div>
      <Favorite className={favoriteStatus ? "red" : "gray"} />
    </Wrapper>
  );
};

export default FavoriteButton;
