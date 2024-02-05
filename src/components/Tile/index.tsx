import { FC } from "react";

import { BASE_URL } from "@common";
import { Tile } from "src/api/types";
import ImageWrapper from "@components/Image";

const Tile: FC<Tile> = ({ "poster-image": posterImage, name }) => {
  const imageUrl = `${BASE_URL}/images/${posterImage}`;
  const fallbackImageUrl =
    BASE_URL + "/images/placeholder_for_missing_posters.png";
  return (
    <>
      <ImageWrapper
        src={imageUrl}
        alt={name}
        className="w-full"
        fallbackSrc={fallbackImageUrl}
      />
      <p className="mt-1">{name}</p>
    </>
  );
};

export default Tile;
