import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Cell } from "./History.style";

const AdvancedSearchCell = ({ data, callback }) => {
  const { genres } = useSelector((state) => state.movies);

  return (
    <Link to="/search">
      <Cell onClick={callback}>
        {data.map((genre) => (
          <div key={genre}>{genres && genres[genre].name}</div>
        ))}
      </Cell>
    </Link>
  );
};

export default AdvancedSearchCell;
