import React from "react";
import { Link } from "react-router-dom";

// Styles
import { Cell } from "./History.style";

const CellSearch = ({ term, callback }) => {
  return (
    <Link to="/search">
      <Cell onClick={callback}>{term}</Cell>
    </Link>
  );
};

export default CellSearch;
