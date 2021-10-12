import React from "react";
import { useSelector } from "react-redux";

// Components
import Grid from "../Grid/Grid";
import Thumb from "../Thumb/Thumb";
import NoImage from "../../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../helpers/config";

//  Styles
import { Wrapper } from "./Favorites.style";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.auth.currentUser);

  return (
    <Wrapper>
      {Object.keys(favorites).length ? (
        <Grid header={"Favorites"} width="100%">
          {favorites &&
            Object.values(favorites).map(({ id, image }) => (
              <Thumb
                key={id}
                clickable={true}
                image={image ? IMAGE_BASE_URL + POSTER_SIZE + image : NoImage}
                movieid={id}
              />
            ))}
        </Grid>
      ) : (
        <h1>You haven't added anything to your favorites yet</h1>
      )}
    </Wrapper>
  );
};

export default Favorites;
