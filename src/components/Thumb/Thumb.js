import React from "react";
import { Link } from "react-router-dom";

// styles
import { Image } from "./Thumb.style";

const Thumb = ({ image, movieid, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`movie/${movieid}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

export default Thumb;
