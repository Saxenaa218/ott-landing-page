import { FC } from "react";

import { BASE_URL } from "@common";
import { Tile } from "src/api/types";

const Tile: FC<Tile> = ({ "poster-image": posterImage, name }) => {
  const imageUrl = `${BASE_URL}/images/${posterImage}`;
  return (
    <>
      <img src={imageUrl} alt={name} loading="lazy" />
      <p className="mt-1">{name}</p>
    </>
  );
};

export default Tile;
