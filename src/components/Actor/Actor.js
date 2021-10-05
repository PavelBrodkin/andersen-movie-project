import React from "react";

import { Wrapper, Image } from "./Actor.style";

function Actor({ name, character, imageUrl }) {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actror-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
}

export default Actor;
